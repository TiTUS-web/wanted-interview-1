export type TFeature = {
    description: string,
    image: string,
    image_alt: string,
    model_name: string,
    sorting: number
}

export type TResponseData = {
    assets_domain: string,
    block_heading: string,
    features: TFeature[]
};

