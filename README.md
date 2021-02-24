# socialApp
config.js 部分為mongodb atlas 上面的設定

DeleteButton.js -->

const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        refetchQueries: [{ query: FETCH_POSTS_QUERY }],

        update(proxy) {
            setConfirmOpen(false);

            //  const data = proxy.readQuery({
            //      query: FETCH_POSTS_QUERY,
            //  });
            //  data.getPosts = data.getPosts.filter((p) => p.id !== postId);
            //  proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });

            if (callback) callback();
        },

        variables: {
            postId,
        },
    });



PostForm.js --> 

function PostForm() {
    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        body: "",
    });

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,

        update(proxy, result) {
            values.body = "";
        },
        onError(err) {
            //console.log(err)
        },
        refetchQueries: [{ query: FETCH_POSTS_QUERY }],
    });

    function createPostCallback() {
        createPost();
    }