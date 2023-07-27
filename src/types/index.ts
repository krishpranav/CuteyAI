export enum PresentType {
    Casual = 'Casual',
    Translator = 'Translator',
    Summarizer = 'Summarizer',
    Programmer = 'Programmer',
    Analyst = 'Analyst'
}

export interface PanelVisible {
    plugin?: boolean
    setting?: boolean
    chatPanel?: boolean
}

export interface DataType {
    key: string
    character: string
    prompt: string
}

export interface PosType {
    posX: number
    posY: number
}

export interface PresentModule {
    listVisible: boolean
    builtInPlugins: PluginType[]
    currentPresent: PresentType
}

export interface PluginType {
    logo: string
    id: PresentType
    title: PresentType
    desc?: string
    loading: boolean
}