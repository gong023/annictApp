import React, { PropTypes } from 'react';
import { ListView, Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activitiesRequest } from './../actions';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.setDataSource(this.props.data);
    this.props.requestActivities();
  }

  componentWillReceiveProps(newProps) {
    this.setDataSource(newProps.data);
  }

  setDataSource(data) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  render() {
    return (
      <View>
        <ActivityIndicator animating={this.props.data.length === 0} />
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={activity => (
            <View>
              <View style={styles.row}>
                <Image style={styles.thumb} source={{ uri: activity.user.avatar_url }} />
                <Text style={styles.text}>
                  watched {activity.work.title} vol.{activity.work.episodes_count}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

ActivityList.propTypes = {
  requestActivities: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.object,
    work: PropTypes.object,
  })),
};

const mapStateToProps = state => ({
  data: state.activities.data,
});

const mapDispatchToProps = dispatch => ({
  requestActivities: bindActionCreators(activitiesRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
