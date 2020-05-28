<template>
    <div class="card card-outline card-info">
        <div class="card-header">
            <h3 class="card-title">
                Upload een CSV bestand
            </h3>
            <div class="card-tools">
                <button type="button" class="btn btn-tool btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                    <i class="fas fa-minus"></i></button>
                <button type="button" class="btn btn-tool btn-sm" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                    <i class="fas fa-times"></i></button>
            </div>
        </div>

        <div class="card-body pad">
            <div class="mb-3">
                <el-upload drag action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"

                           list-type="picture"
                           :show-file-list="true"
                        multiple>
                    <i class="el-icon-upload" style=""></i>
                    <div class="el-upload__text">
                        Sleep een bestand met .CSV extensie<br />
                        <em>of klik hier om een bestand te uploaden</em>
                    </div>
<!--                    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>-->
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Upload',
        components: {
            ElUpload: () => import( /* webpackChunkName: "upload-component" */  'element-ui/lib/upload')
        },
        data() {
            return {
                fileList: [{name: 'Students_Assignments_list_2019.CSV', url: 'https://domoticx.com/wp-content/uploads/2014/12/CSV-icon.png'}, {name: 'Teacher_Credentials.CSV', url: 'https://domoticx.com/wp-content/uploads/2014/12/CSV-icon.png'}],
                error: null,
                loading: true
            }
        },
        methods: {
            readUploadedFile(file) {
                this.fileList.push(file);
            },
            handlePreview() {
                console.log('preview')
            },
            handleRemove() {
                console.log('removed file')
            }
        }
    }
</script>
