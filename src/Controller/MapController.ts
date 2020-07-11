import { MapPin } from "../Model/MapPin";
import { ObservationStation } from "../Model/ObservationStation";
import { Viewport } from "../Model/Viewport";
import { Position } from "../Model/Position";
import { Observation } from "../Model/Observation";
import { Feature } from "../Model/Feature";
import { Scale } from "../Model/Scale";
import { Polygon } from "../Model/Polygon";
import MapConfiguration from "./MapConfiguration";
import MapConfigurationMemory from "./Storage/MapConfigurationMemory";
import NearConfiguration from "./NearConfiguration";
import MockDataProvider from "./FROST/MockDataProvider";

export class MapController {
    private config: MapConfiguration;
    private viewport: Viewport;

    constructor() {
        var mcm = MapConfigurationMemory.load();
        this.config = mcm[0];
        //TODO: Fix MapConfigMemory
        this.config = new NearConfiguration(MockDataProvider.mockFeature());
        this.viewport = mcm[1];
        if (this.config.getFeatures().length === 0) {
            throw Error("Invalid MapConfiguration");
        }
    }

    handlePopup(pin: MapPin): Observation {
        //TODO: Rework
        var station = new ObservationStation(
            pin.getId(),
            pin.getId(),
            "desc1",
            pin.getPosition(),
            []
        );
        return new Observation(
            station,
            this.config.getFeatures()[0],
            15,
            new Date(Date.now())
        );
    }

    private save() {
        MapConfigurationMemory.save(this.config, this.viewport);
    }

    getViewport(): Viewport {
        return this.viewport;
    }

    handleViewportChange(viewport: Viewport) {
        this.viewport = viewport;
        this.save();
    }

    getPins(): MapPin[] {
        return this.config.getPins(this.viewport);
    }

    getPolygons(): Polygon[] {
        return this.config.getPolygons(this.viewport);
    }

    getScale(): Scale {
        return this.config.getScale();
    }

    changeFeature(feature: Feature) {
        //TODO
    }

    onConfigurationChange(conf: MapConfiguration) {
        this.config = conf;
        this.save();
    }

    async search(searchTerm: string) {
        if (searchTerm.length === 0) {
            return; //No search possible
        }

        var response = await fetch(
            "https://nominatim.openstreetmap.org/search?format=json&q=" +
                encodeURIComponent(searchTerm)
        );
        var json = await response.json();
        if (json.length === 0) {
            return; //No location found
        }
        this.updateCurrentPosition(new Position(json[0].lat, json[0].lon));
    }

    updateCurrentPosition(position: Position) {
        this.viewport.setCenter(position);
        console.log(position);
    }
}
