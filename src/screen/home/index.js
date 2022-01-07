import React, {useEffect, useState} from 'react';
import {Alert, View, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';
import {URL} from '../../helpers/url';
import GenreCard from '../../component/genrecard';
import CardMovie from '../../component/CardMovie';
import {useSelector} from 'react-redux';

export default function home({navigation}) {
  const initialData = [
    {
      title: 'Action ',
      id: 1,
    },
    {
      title: 'Sci-fi ',
      id: 2,
    },
    {
      title: 'Drama ',
      id: 3,
    },
    {
      title: 'Horror ',
      id: 4,
    },
    {
      title: 'Thriller ',
      id: 5,
    },
    {
      title: 'Anime ',
      id: 6,
    },
    {
      title: 'Comedy ',
      id: 7,
    },
    {
      title: 'Romance ',
      id: 8,
    },
  ];
  const [genres, setGenres] = useState(initialData);
  const [populars, setPopulars] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const dataPerkakas = useSelector(state => state);

  console.log(dataPerkakas);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const listMoviePopular = await axios({
        method: 'GET',
        url: `${URL.baseUrl}/movie/popular`,
        headers: {Authorization: `Bearer ${URL.token}`},
        validateStatus: status => status < 500,
      });
      if (listMoviePopular.status === 401) {
        Alert.alert('Anda belum terdaftar');
      }
      if (listMoviePopular.status === 200) {
        setPopulars(listMoviePopular.data.results);
      }
      const listMovieTopRated = await axios({
        method: 'GET',
        url: `${URL.baseUrl}/movie/top_rated`,
        headers: {Authorization: `Bearer ${URL.token}`},
        validateStatus: status => status < 500,
      });
      if (listMovieTopRated.status === 401) {
        Alert.alert('Anda belum terdaftar');
      }
      if (listMovieTopRated.status === 200) {
        setTopRatedData(listMovieTopRated.data.results);
      }
      const listMovieNowPlaying = await axios({
        method: 'GET',
        url: `${URL.baseUrl}/movie/now_playing`,
        headers: {Authorization: `Bearer ${URL.token}`},
        validateStatus: status => status < 500,
      });
      if (listMovieNowPlaying.status === 401) {
        Alert.alert('Anda belum terdaftar');
      }
      if (listMovieNowPlaying.status === 200) {
        setNowPlaying(listMovieNowPlaying.data.results);
      }
      const listMovieUpComing = await axios({
        method: 'GET',
        url: `${URL.baseUrl}/movie/upcoming`,
        headers: {Authorization: `Bearer ${URL.token}`},
        validateStatus: status => status < 500,
      });
      if (listMovieUpComing.status === 401) {
        Alert.alert('Anda belum terdaftar');
      }
      if (listMovieUpComing.status === 200) {
        setUpComing(listMovieUpComing.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => {
    return <GenreCard title={item.title} isActive={item.isActive} />;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: moderateScale(24)}}
            horizontal
            data={genres}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
        <View>
          <CardMovie title="Popular" data={populars} navigation={navigation} />
        </View>
        <View>
          <CardMovie
            title="Now Playing"
            data={nowPlaying}
            navigation={navigation}
          />
        </View>
        <View>
          <CardMovie
            title="Top Rated"
            data={topRatedData}
            navigation={navigation}
          />
        </View>
        <View>
          <CardMovie
            title="Up Coming"
            data={upComing}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
