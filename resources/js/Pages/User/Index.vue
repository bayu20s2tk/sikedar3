<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {onMounted, ref, watch} from "vue";
import Table from "@/Components/Table.vue";
import {Link, router} from "@inertiajs/vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";
// import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";
import moment from "moment/moment";
import Pagination from "../../Components/Pagination.vue";

const props = defineProps({
    users: {
        type: Object,
        default: () => ({}),
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
});

let search = ref(props.filters.search);
watch(search, (value) => {
    router.get(
        route('user.index'),
        { search: value },
        {
            preserveState: true,
            replace: true,
        }
    );
});

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

</script>

<template>
    <AppLayout title="Pengguna"
               name="Pengguna"
               desc="lorem ipsum"
    >

        <div class="flex justify-between gap-3">
            <div class="">
                <TextInput
                    type="text"
                    v-model="search"
                    placeholder="Cari disini"
                    class="block w-full lg:w-96 mb-5 shadow"
                />
            </div>

            <div class="">
                <PrimaryButton as="a" :href="route('user.create')" >Tambah</PrimaryButton>
            </div>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="item in props.users.data" :key="item.id">
                    <li>
                        <Link preserve-scroll :href="route('user.show', item)" class="block hover:bg-primary-50" >
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <p class="font-medium truncate capitalize text-gray-900">
                                        {{ item.name }}
                                    </p>
                                    <div class="ml-2 flex-shrink-0 flex">
                                        <p class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full text-gray-600">
                                            {{ item.role }}
                                        </p>
                                        <p  v-if="item.email_verified_at"
                                            class="px-2 text-xs leading-5 font-semibold rounded-full mr-2 bg-green-100 text-green-800"
                                        >
                                            <i class="fa-regular fa-check mr-1" /> Verified
                                        </p>
                                        <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                           :class="item.color"
                                        >
                                            {{ item.status }}
                                        </p>
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div class="flex">
                                        <p class="flex items-center text-sm text-gray-600" >
                                            {{ item.email }}
                                        </p>
                                    </div>
                                    <div class="flex items-center text-sm text-gray-600" >
                                        <!--                                        <i class="fa-regular fa-calendar pr-2" />-->
                                        {{ formattedDate(item.updated_at) }}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </template>
            </ul>
        </div>

        <Pagination :pagination="props.users" />

<!--        <Table-->
<!--            :title="gridTitle"-->
<!--            :data="props.users.data"-->
<!--            :paginate="props.users"-->
<!--            :columns="gridColumns"-->
<!--            :filter-key="searchQuery"-->
<!--            routes="user"-->
<!--            :view=true-->
<!--        />-->

    </AppLayout>



</template>
