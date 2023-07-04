import HistoryModalPreview from './HistoryModalPreview'
import HistoryModalBin from './HistoryModalBin'
import HistoryModalGroup from './HistoryModalGroup'
import HistoryModalEdit from './HistoryModalEdit'
export default function HistoryModals() {
    return (
        <>
            <HistoryModalPreview />
            <HistoryModalEdit />
            <HistoryModalGroup />
            <HistoryModalBin />
        </>
    )
}
