import { useRouter } from 'next/navigation';

import { useLocale, } from 'next-intl'
import { Radio } from 'antd'
import { appLocales } from '@/i18n';
import { testIds } from '@/utils';

const AppLanguage = () => {
    const router = useRouter()
    const locale = useLocale();

    return (
        <Radio.Group
            data-testid={testIds.header.language}
            options={appLocales.map(locale => locale.toUpperCase())}
            onChange={(e) => { router.push(`/${(e.target.value)}`.toLowerCase()) }}
            value={locale.toUpperCase()}
            optionType="button"
            buttonStyle="solid"
        />
    )
}

export default AppLanguage