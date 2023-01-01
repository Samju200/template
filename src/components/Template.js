import React, { useEffect } from 'react';
import './Template.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplate } from '../features/template/templateSlice';

function Template() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTemplate());
  }, [dispatch]);
  const { activeTemplates, loading, text } = useSelector(
    (state) => state.template
  );
  const { currentPage, postsPerPage } = useSelector(
    (state) => state.pagination
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = activeTemplates?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <div className="template">
      {loading ? (
        <h2 className="loading">loading....</h2>
      ) : (
        <div>
          <div className="template_header">
            <h2>{text ? text : 'All'} Template</h2>

            <p>{activeTemplates.length} Template Found</p>
          </div>
          <div className="template_body">
            {currentPosts?.map((current) => {
              const { name, link, description } = current;
              return (
                <div className="template_body_container">
                  <div className="template_body_details">
                    <h1>{name}</h1>
                    <p>{description}</p>
                  </div>
                  <div className="template_body_link">
                    <a href={link}>Use Template</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
