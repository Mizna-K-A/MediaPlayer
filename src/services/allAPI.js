import serverUrl from "./baseURL";
import commonAPI from "./commonAPI";

// upload video API must called by Add component
export const uploadVideoAPI = async (uploadVideo)=>{
    return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}

// get all video API nust called by View component
export const getAllVideoAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}

// store watch history Api must called by VideoCard
export const storeHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

// gethistory api must called history component
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/history`,"")
}

// removeHistoryAPI called history component
export const removeHistoryAPI = async (historyId)=>{
    return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})
}

// remove video api called by videoCard component
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId}`,{})
}

// add category api
export const addCategoryAPI = async (CategoryDetails)=>{
    return await commonAPI("POST",`${serverUrl}/categories`,CategoryDetails)
}

// getallcategory api
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

// removecategory api
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${serverUrl}/categories/${categoryId}`,{})
}