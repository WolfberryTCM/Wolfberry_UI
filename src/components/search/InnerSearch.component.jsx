import React from 'react';
import { connect } from 'react-redux';

import InnerSearchCard from './InnerSearchCard.component';

const InnerSearch = ({ profile: { profiles, loading } }) => {
  return (
    <div>
      {!loading &&
        profiles.map((profile, index) => (
          <InnerSearchCard key={index} profile={profile}></InnerSearchCard>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(InnerSearch);
