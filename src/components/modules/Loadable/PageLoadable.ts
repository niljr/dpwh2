import Loadable from '@react-loadable/revised';
import PageLoading from '../PageLoading';

export default function PageLoadable(opts: any) {
    return Loadable(Object.assign({
        loading: PageLoading
    }, opts));
}
