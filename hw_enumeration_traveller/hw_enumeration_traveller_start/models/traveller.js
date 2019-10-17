const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((firstLocation)=>{
    return this.journeys.startLocation;
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((lastLocation)=>{
    return this.journeys.endLocation;
  })
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.transport.filter((autoMobile) => {
    return (transport === autoMobile);
  })
  return result;
}
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.distance.filter((distance) => {
    return ( distance >= minDistance);
  })
  return result;
}

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.distance.reduce((total, journeyDistance) => {
    return total + journeyDistance;
  }, 0);
}
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.transport.map((autoMobiles)=>{
    if(this.journeys.transport.includes(autoMobiles)){
      return autoMobiles;}
  })
  return result;
};


module.exports = Traveller;
