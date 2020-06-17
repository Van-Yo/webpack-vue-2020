/**
 * @Description: webpack辅助工具类
 */
class webpackUtils {
    constructor() {
        this.ENV = process.env.npm_lifecycle_event;
    }
    /**
     * 获取打包环境,按照环境配置是否压缩和请求地址
     */
    getEnvConfig() {
        let config = {};
        switch (this.ENV) {
            // 开发环境:不压缩,公司测试地址
            case 'dev':
                config = {
                    IS_ENCRYPT : 'false',
                    BASE_URL : '"http://localhost:3300"'    
                };
                break;
            // mock环境:不压缩,开发环境地址
            case 'mock':
                config = {
                    IS_ENCRYPT : 'false',
                    BASE_URL : '"http://localhost:8080"'    
                };
                break;
            // 测试环境:压缩，公司测试地址
            case 'test':
                config = {
                    IS_ENCRYPT : 'true',
                    BASE_URL : '"http://localhost:3300"'    
                };
                break;
            // 生成环境:压缩，生产环境地址
            case 'build':
                config = {
                    IS_ENCRYPT : 'true',
                    BASE_URL : '"http://139.224.227.52:8088"'    
                };
                break;
            default:
                config = {
                    IS_ENCRYPT : 'false',
                    BASE_URL : '"http://localhost:3300"'    
                };
        }
        return config;
    }
}
module.exports = new webpackUtils();
