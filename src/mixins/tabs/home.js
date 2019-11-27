import wepy from 'wepy'

export default class Home extends wepy.mixin {
    data = {
        swiperData: [],
        cateData:[]
      };
    
      config = {};
      // 定义获取轮播图的数据
      async getSwiperData() {
        const { data: res } = await wepy.request({
          url: 'https://uinav.com/api/public/v1/home/swiperdata'
        });
        console.log(res);
        // 代表数据获取失败
        if (res.meta.status !== 200) {
          return wepy.showToast({
            title: '数据获取失败',
            icon: 'none'
          });
        }
        // 代表数据获取成功
        this.swiperData = res.message;
        this.$apply();
      }
      // 定义获取分类的数据
      async getCateData(){
        const{data:res} = await wepy.request({
          url:'https://uinav.com/api/public/v1/home/catitems'
        });
        console.log(res);
        // 代表数据获取失败
        if (res.meta.status !== 200) {
          return wepy.showToast({
            title: '数据获取失败',
            icon: 'none'
          });
        }
        // 代表数据获取成功
        this.cateData = res.message;
        this.$apply();
      }
      methods = {};
      onLoad() {
        this.getSwiperData();
        this.getCateData()
      }
    }

