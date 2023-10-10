import Post from '../models/Post.js'

export const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
}

export const createPost = async (req, res) => {
    const { title, description } = req.body
    const newPost = new Post({ title, description })
    await newPost.save()
    return res.json(newPost)
}

export const updatePost = (req, res) => res.send('Updating a post')

export const deletePost = (req, res) => res.send('Deleting a post')

export const getPost = (req, res) => res.send('Getting a post')