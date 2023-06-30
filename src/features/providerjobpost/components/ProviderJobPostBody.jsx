import ProviderJobCard from './ProviderJobCard'
import { useSelector } from 'react-redux'
export default function ProviderJobPostBody({ jobPost }) {
    return (
        <div className="flex flex-col max-w-[900px]  min-w-[600px] w-[700px]  bg-base-100 rounded-b-lg    p-[20px] min-h-[400px] max-h-[400px] h-[400px]  overflow-auto">
            <ProviderJobCard />
        </div>
    )
}
