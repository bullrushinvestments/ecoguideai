import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

interface Test {
  id: number;
  title: string;
  content: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  loading?: boolean;
  error?: string | null;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, loading = false, error }) => {
  const [testList, setTestList] = useState<Test[]>([]);
  
  const formik = useFormik({
    initialValues: { title: '', content: '' },
    validationSchema,
    onSubmit: (values) => {
      if (!onSubmit) return;
      onSubmit({ id: Date.now(), title: values.title, content: values.content });
      setTestList([...testList, { id: Date.now(), title: values.title, content: values.content }]);
      formik.resetForm();
    }
  });

  const handleDelete = (id: number) => {
    setTestList(testList.filter((test) => test.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={clsx('w-full px-3 py-2 border rounded', {
              'border-red-500': formik.touched.title && formik.errors.title
            })}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="content" className="block mb-1">Content</label>
          <textarea
            id="content"
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={5}
            className={clsx('w-full px-3 py-2 border rounded', {
              'border-red-500': formik.touched.content && formik.errors.content
            })}
          />
          {formik.touched.content && formik.errors.content ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.content}</div>
          ) : null}
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      <h3 className="text-lg font-bold mt-6">Tests</h3>
      {testList.length === 0 && !loading ? (
        <p className="mt-2 text-gray-500">No tests written yet.</p>
      ) : null}
      
      {testList.map((test) => (
        <div key={test.id} className="border p-4 mt-3 rounded mb-2">
          <h4>{test.title}</h4>
          <pre className="whitespace-pre-wrap">{test.content}</pre>
          <button onClick={() => handleDelete(test.id)} type="button" className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

interface Test {
  id: number;
  title: string;
  content: string;
}

interface WriteTestsProps {
  onSubmit: (test: Test) => void;
  loading?: boolean;
  error?: string | null;
}

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required')
});

const WriteTests: React.FC<WriteTestsProps> = ({ onSubmit, loading = false, error }) => {
  const [testList, setTestList] = useState<Test[]>([]);
  
  const formik = useFormik({
    initialValues: { title: '', content: '' },
    validationSchema,
    onSubmit: (values) => {
      if (!onSubmit) return;
      onSubmit({ id: Date.now(), title: values.title, content: values.content });
      setTestList([...testList, { id: Date.now(), title: values.title, content: values.content }]);
      formik.resetForm();
    }
  });

  const handleDelete = (id: number) => {
    setTestList(testList.filter((test) => test.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Write Tests</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={clsx('w-full px-3 py-2 border rounded', {
              'border-red-500': formik.touched.title && formik.errors.title
            })}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="content" className="block mb-1">Content</label>
          <textarea
            id="content"
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={5}
            className={clsx('w-full px-3 py-2 border rounded', {
              'border-red-500': formik.touched.content && formik.errors.content
            })}
          />
          {formik.touched.content && formik.errors.content ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.content}</div>
          ) : null}
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      <h3 className="text-lg font-bold mt-6">Tests</h3>
      {testList.length === 0 && !loading ? (
        <p className="mt-2 text-gray-500">No tests written yet.</p>
      ) : null}
      
      {testList.map((test) => (
        <div key={test.id} className="border p-4 mt-3 rounded mb-2">
          <h4>{test.title}</h4>
          <pre className="whitespace-pre-wrap">{test.content}</pre>
          <button onClick={() => handleDelete(test.id)} type="button" className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default WriteTests;