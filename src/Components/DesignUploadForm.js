import React, { useState } from 'react';
import './DesignUploadForm.css';

const DesignUploadForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [tags, setTags] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle file change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // Handle form submit (without API call)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !file) {
            alert('Please fill all the required fields.');
            return;
        }

        alert('Design submitted successfully!');
        // Reset form
        setTitle('');
        setDescription('');
        setTags('');
        setFile(null);
    };

    return (
        <div className="design-upload-form-container">
            <h2>Share Your Designs</h2>
            <form onSubmit={handleSubmit}>
                {/* Title Input */}
                <div className="design-form-group">
                    <label htmlFor="title">Design Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your design title"
                        required
                    />
                </div>

                {/* Description Input */}
                <div className="design-form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                        placeholder="Describe your design"
                    />
                </div>

                {/* File Upload */}
                <div className="design-form-group">
                    <label htmlFor="file-upload">Upload Design</label>
                    <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        accept=".jpg, .png, .jpeg, .pdf, .svg"
                        required
                    />
                </div>

                {/* Tags Input */}
                <div className="design-form-group">
                    <label htmlFor="tags">Tags (Optional)</label>
                    <input
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="E.g., logo, webpage, design"
                    />
                </div>

                {/* Submit Button */}
                <div className="design-form-group">
                    <button type="submit" className="design-submit-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Design'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DesignUploadForm;
