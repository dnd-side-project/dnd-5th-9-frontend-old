const { kakao } = window;

const PlaceSearch = () => {
  const container = document.getElementById("myMap");

  const options = {
    center: new kakao.maps.LatLng(37.49780523, 127.02756552),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);
};

export default PlaceSearch;
