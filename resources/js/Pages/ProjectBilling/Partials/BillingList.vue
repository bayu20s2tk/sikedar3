<script setup>
import {ref} from "vue";
import {Link, useForm} from '@inertiajs/vue3';
import Badge from "@/Components/Badge.vue";
import moment from "moment/moment";

const props = defineProps({
    item: Object
})

const form = useForm({
    // course_id: props.item.course.id,
    // user_id: props.item.user.id,
    project_id: props.item.id,
    status_id: null
});

const storeInformation = (index) => {
    form.status_id = index;

    form.post(route('projectBilling.store'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {

        },
        // onError: () => passwordInput.value.focus(),
        onFinish: () => {
            form.reset()
        }
    });
};

const show = ref(false)

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}
function formatPrice(value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
</script>

<template>
    <li>
        <button @click="show=!show" class="flex w-full justify-between px-6 py-4">
            <div class="">
                <p class="font-medium text-gray-900">
                    <i class="fa-regular fa-umbrella-beach mr-2" />
                    {{ props.item.name }}
                </p>
            </div>
            <div class="">
                <Badge v-if="props.item.media[0]" name="Ada foto" class="text-amber-600 bg-amber-100 mr-5" />
                <Badge :name="props.item.billing" class="mr-5" :class="props.item.color" />
                <i class="fa-regular text-gray-900 w-5" :class="show ? 'fa-angle-down' : 'fa-angle-right' " />
            </div>
        </button>
        <div v-if="show" class="">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Billing Proyek</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Informasi proyek</p>
            </div>
            <div class="px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Proyek</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.item.name }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Nominal Pembayaran</dt>
                        <dd class="mt-1 text-sm text-gray-900">Rp {{formatPrice(props.item.price) }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Worker</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.item.worker.name }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Owner</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.item.user.name }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Status Proyek</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.item.status }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                        <dt class="text-sm font-medium text-gray-500">Status Pembayaran</dt>
                        <dd class="mt-1 text-sm text-gray-900">{{ props.item.billing }}</dd>
                    </div>
                    <!--                    <div class="sm:col-span-2">-->
                    <!--                        <dt class="text-sm font-medium text-gray-500">About</dt>-->
                    <!--                        <dd class="mt-1 text-sm text-gray-900" v-html="props.desc" />-->
                    <!--                    </div>-->
                    <div class="sm:col-span-1" v-if="props.item.media[0]">
                        <dt class="text-sm font-medium text-gray-500">Bukti transfer</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                            <img :src="props.item.media[0].original_url" class="rounded-3xl max-w-sm" />
                        </dd>
                    </div>
                    <div class="sm:col-span-2">
                        <dt class="text-sm font-medium text-gray-500">Aksi</dt>
                        <dd class="mt-1 text-sm text-gray-900">
                            <ul role="list" class="divide-y divide-gray-300 rounded-3xl border border-gray-300">
                                <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div class="flex w-0 flex-1 items-center">
<!--                                        <i class="fa-regular fa-dog" />-->
<!--                                        <span class="ml-2 w-0 flex-1 truncate">Dolor sit amet</span>-->
                                    </div>
                                    <div class="ml-4 flex-shrink-0">
                                        <a
                                            target="_blank"
                                            :href="route('project.show', props.item)"
                                            class="font-medium text-primary-600 hover:text-indigo-500">Lihat Proyek</a>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm" v-if="props.item.status_id==2 && props.item.media[0]">
                                    <div class="flex w-0 flex-1 items-center">
                                        <!--                                        <i class="fa-regular fa-cat" />-->
                                        <!--                                        <span class="ml-2 w-0 flex-1 truncate">Lorem ipsum</span>-->
                                    </div>
                                    <div class="ml-4 flex-shrink-0">
                                        <button @click.prevent="storeInformation(3)" class="font-medium text-primary-600">Mulai Proyek</button>
                                    </div>
                                </li>
                                <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm" v-if="props.item.status_id==4">
                                    <div class="flex w-0 flex-1 items-center">
<!--                                        <i class="fa-regular fa-cat" />-->
<!--                                        <span class="ml-2 w-0 flex-1 truncate">Lorem ipsum</span>-->
                                    </div>
                                    <div class="ml-4 flex-shrink-0">
                                        <button @click.prevent="storeInformation(5)" class="font-medium text-primary-600">Tandai sudah dibayar</button>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </li>
</template>
