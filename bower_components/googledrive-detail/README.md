# googledrive-detail

Implementation Google Drive [Folder](https://developers.google.com/drive/v2/reference/children/get#try-it), [File](https://developers.google.com/drive/v3/reference/files/get#try-it) API.

Before start, should go to [Google API Developer](https://console.developers.google.com/) get a API key for these API used.

#### Examples

		<googledrive-detail api-key="{{apiKey}}"
												folder-id="{{folderId}}"
												file-info-list="{{fileInfoList}}"></googledrive-detail>	

#### Notes

The properties `fileInfoList` will get all files information from FolderId, but should wait for isFileExist to be true ! 

Than you can use these data to design your Layout!

Also can use googledrive-card to design your layout.

See in [component page](https://sky172839465.github.io/googledrive-detail/bower_components/googledrive-detail)