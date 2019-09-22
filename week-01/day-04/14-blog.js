// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

'use strict'

const BlogPost = require('./02-BlogPost')

class Blog {
    constructor(){
        this.BlogPosts = []
    }

    add(BlogPost){
        this.BlogPosts.push(BlogPost)
        console.log('The post has been added.\n')
    }

    delete(int){
        this.BlogPosts.splice(int,1)
        console.log('The post has been deleted.\n')
    }

    update(int, BlogPost){
        this.BlogPosts.splice(int,1, BlogPost)
        console.log('The post has been updated.\n')
    }
    post(){
        this.BlogPosts.forEach(BlogPost=>{
            BlogPost.post()
        })
    }
}

const blog = new Blog()
const blog1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.')
const blog2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.')
const blog3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.')
blog.add(blog1)
blog.add(blog2)
blog.add(blog3)

const blog4 = new BlogPost('Xiaoyu Qin', 'UoB', 'I am a phd.', '2019.09.10.')
blog.update(1,blog4)
blog.post()

