import { useTranslations } from "next-intl"
import { Button, message } from "antd"
import { useAppDispatch } from "@/store/hooks"
import { setFeedRemember } from "@/store/slices/feed/feed.slice"

const SaveFeed = () => {
    const dispatch = useAppDispatch()
    const texts = useTranslations("filters")

    return (
        <Button
            className="w-fit"
            type="primary"
            onClick={() => {
                dispatch(setFeedRemember(true))
                message.success(texts('saveSuccess'))
            }}
        >
            {texts('save')}
        </Button>
    )
}

export default SaveFeed