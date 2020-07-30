import React from "react";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

import { ObservationStation } from "../../Model/ObservationStation";

import ObservationStationProfile from "./ObservationStationProfile";
import LocationMap from "./LocationMap";
import Diagram from "./Diagram";
import DataProvider from "../../Controller/FROST/DataProvider";

export default class DetailPage extends React.Component<
    IDetailPageProps,
    IDetailPageState
> {
    constructor(props: IDetailPageProps) {
        super(props);
        this.state = { obs: null };
        DataProvider.getStation(this.props.match.params.id).then((o) => {
            this.setState({ obs: o });
        });
    }

    //styles of this component
    styles = {
        main_container: {
            paddingTop: "20px",
        },
    };

    //return diagrams of this observation station
    renderDiagrams() {
        var diagramController = (this.state
            .obs as ObservationStation).getDiagramController();
        return diagramController.map((controller) => (
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <Diagram controller={controller} />
            </Grid>
        ));
    }

    //render component
    render() {
        return (
            <Grid container justify="center">
                <Grid
                    container
                    justify="center"
                    spacing={4}
                    xl={8}
                    lg={8}
                    md={8}
                    sm={12}
                    xs={12}
                    style={this.styles.main_container}
                >
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                        {this.state.obs ? (
                            <ObservationStationProfile
                                observationStation={this.state.obs}
                            />
                        ) : (
                            <p>...</p>
                        )}
                    </Grid>
                    <Hidden only={["sm", "xs"]}>
                        <Grid item xl={4} lg={4} md={4}>
                            {this.state.obs ? (
                                <LocationMap
                                    position={this.state.obs.getPosition()}
                                />
                            ) : (
                                <p>...</p>
                            )}
                        </Grid>
                    </Hidden>
                    {this.state.obs ? this.renderDiagrams() : <p>...</p>}
                </Grid>
            </Grid>
        );
    }
}

interface IDetailPageProps {
    match: { params: { id: string } };
}

interface IDetailPageState {
    obs: ObservationStation | null;
}
