import {
  WebCrawlerAttemptDto,
  WebCrawlerInputDto,
  WebCrawlerOutputDto,
  WebCrawlerQueueDto,
} from '../../web-crawler';

export class GMBQueueDto extends WebCrawlerQueueDto {
  max_reviews: number = 1;
  declare u_fname?: string | null;
  declare u_lname?: string | null;
  declare b_name?: string | null;
  declare b_address?: string | null;
  declare b_country?: string | null;
  declare b_state?: string | null;
  declare b_city?: string | null;
  declare b_zipcode?: string | null;
  declare b_website?: string | null;
}

export class GMBReviewDto {
    declare gr_contributor_name?: string | null;
    declare gr_contributor_profile_url?: string | null;
    declare gr_rating?: string | null;
    declare gr_feedback?: string | null;
    declare gr_date?: string | null;
}

export class GMBInputDto extends WebCrawlerInputDto {
  declare queue: GMBQueueDto[];
}

// GMBOutputDto is not requird in this SDK but just created as standard artifact and future extension
export class GMBOutputDto extends WebCrawlerOutputDto implements GMBQueueDto {
    max_reviews: number = 1;
    
    declare b_primary_category?: string | null;
    declare b_secondary_category?: string | null;
    declare b_toll_free_number?: string | null;
    declare b_mobile?: number | null;
    declare b_mobile_cc?: number | null;
    declare b_email?: string | null;
    declare b_website_url?: string | null;
    declare b_about?: string | null;
    declare b_facebook_profile?: string | null;
    declare b_instagram_profile?: string | null;
    declare b_youtube_profile?: string | null;
    declare b_x_profile?: string | null;
    declare b_linkedin_profile?: string | null;
    declare b_tiktok_profile?: string | null;
    declare b_pinterest_profile?: string | null;
    declare b_google_my_business_url?: string | null;
    declare b_google_featured_result?: boolean | null;
    declare b_google_review_url?: string | null;
    declare b_google_review_rating?: string | null;
    declare b_google_review_total?: string | null;
    declare b_google_review?: GMBReviewDto[] | string | null;
    declare b_hours_monday?: string | null;
    declare b_hours_tuesday?: string | null;
    declare b_hours_wednesday?: string | null;
    declare b_hours_thursday?: string | null;
    declare b_hours_friday?: string | null;
    declare b_hours_saturday?: string | null;
    declare b_hours_sunday?: string | null;
    declare b_gmap_plus_code?: string | null;
    declare b_gmap_url?: string | null;
    declare b_gmap_latitude?: string | null;
    declare b_gmap_longitude?: string | null;
}

export class GMBAttemptDto extends WebCrawlerAttemptDto {
    declare output?: GMBOutputDto;
}