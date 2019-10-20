(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("220fa8a4-18ac-44f0-8d0f-611ea044c0ff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '220fa8a4-18ac-44f0-8d0f-611ea044c0ff' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"abacfcbf-52c0-4522-8242-cefffc4ba0f2":{"roots":{"references":[{"attributes":{"overlay":{"id":"cf5333d2-ae20-452f-8465-e1a715496856","type":"BoxAnnotation"},"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"}},"id":"ceeb017a-1edc-4f7e-afef-a8b89b2ae77c","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"},"ticker":{"id":"fdb63386-fd6f-45a1-a372-fe43d89749c6","type":"BasicTicker"}},"id":"a5ad4da9-9ca2-4995-991f-07cd6e4e81fe","type":"Grid"},{"attributes":{"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"},"ticker":{"id":"77b85749-4014-4909-95fd-31dd5646a9fe","type":"BasicTicker"}},"id":"88bcc5ef-c54b-498c-9444-9cc44b25ac1c","type":"Grid"},{"attributes":{},"id":"fdb63386-fd6f-45a1-a372-fe43d89749c6","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"8fb7208f-977b-42d5-9f89-4220c240424c","type":"Triangle"},{"attributes":{"label":{"value":"versicolor"},"renderers":[{"id":"eda75d4e-68b8-41b5-8827-3d23cbc6d922","type":"GlyphRenderer"}]},"id":"ade4e099-5c61-45b4-8c90-bb6ae4843cd3","type":"LegendItem"},{"attributes":{"label":{"value":"setosa"},"renderers":[{"id":"b818646d-cbaa-428d-bf42-61b789818fe9","type":"GlyphRenderer"}]},"id":"c0249bdd-e5b8-4cb2-8275-075f66334ec8","type":"LegendItem"},{"attributes":{"data_source":{"id":"ff2d3394-12d6-4d3b-9c26-9b02837d3229","type":"ColumnDataSource"},"glyph":{"id":"e8c7d3ae-6fd5-4e08-9a4b-25e944fc59b7","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"eda75d4e-68b8-41b5-8827-3d23cbc6d922","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a7421a0e-7276-462b-91da-7c0ac67edb8d","type":"PanTool"},{"id":"32e02ca7-24ad-47f3-ab74-fc2aec844585","type":"WheelZoomTool"},{"id":"ceeb017a-1edc-4f7e-afef-a8b89b2ae77c","type":"BoxZoomTool"},{"id":"6720e8ef-074c-4451-b70a-83d27ff59941","type":"SaveTool"},{"id":"88ba5449-28d1-4be1-a728-9e59b0693e33","type":"ResetTool"},{"id":"0372ef1d-4bd8-4c81-a3f9-f07570421276","type":"HelpTool"}]},"id":"e5f1aeca-c2c9-4fa1-b85b-609eb4d1c7c6","type":"Toolbar"},{"attributes":{},"id":"0539f188-0fb3-4ce1-b3e6-7da3190a8d4e","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"}},"id":"6720e8ef-074c-4451-b70a-83d27ff59941","type":"SaveTool"},{"attributes":{},"id":"0640ba2c-7bd8-4eba-b02d-10e028513f42","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"e8c7d3ae-6fd5-4e08-9a4b-25e944fc59b7","type":"Square"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"0539f188-0fb3-4ce1-b3e6-7da3190a8d4e","type":"BasicTickFormatter"},"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"},"ticker":{"id":"fdb63386-fd6f-45a1-a372-fe43d89749c6","type":"BasicTicker"}},"id":"1f03f91f-ed81-432b-bae1-9019c4cba9e8","type":"LinearAxis"},{"attributes":{},"id":"9786b169-5166-41fe-8f8a-b34e2542cd6b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d4d57a5d-bffa-49c2-ab62-3bb7d63647d8","type":"ColumnDataSource"},"glyph":{"id":"d6d4f000-45e7-490d-9cc1-44e93854f08d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b818646d-cbaa-428d-bf42-61b789818fe9","type":"GlyphRenderer"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"9786b169-5166-41fe-8f8a-b34e2542cd6b","type":"BasicTickFormatter"},"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"},"ticker":{"id":"77b85749-4014-4909-95fd-31dd5646a9fe","type":"BasicTicker"}},"id":"a6ceef0e-6f7e-4de3-8ebd-1cb7fd3eca03","type":"LinearAxis"},{"attributes":{"items":[{"id":"c0249bdd-e5b8-4cb2-8275-075f66334ec8","type":"LegendItem"},{"id":"ade4e099-5c61-45b4-8c90-bb6ae4843cd3","type":"LegendItem"},{"id":"b817e2cb-914d-4719-819e-358b7494d724","type":"LegendItem"}],"location":"top_left","plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"}},"id":"3ce97e5a-76b3-4813-a616-7175feaeaa97","type":"Legend"},{"attributes":{"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"}},"id":"a7421a0e-7276-462b-91da-7c0ac67edb8d","type":"PanTool"},{"attributes":{"data_source":{"id":"95cb91b0-1c50-4603-866f-f57eb9511c79","type":"ColumnDataSource"},"glyph":{"id":"8fb7208f-977b-42d5-9f89-4220c240424c","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b2e9bee2-2d94-4075-be3a-ed17cfa2abce","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Iris Dataset Color and Marker by Species"},"id":"b479d9a5-6859-4e4d-a1ab-0128aa4b842c","type":"Title"},{"attributes":{"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"}},"id":"32e02ca7-24ad-47f3-ab74-fc2aec844585","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d6d4f000-45e7-490d-9cc1-44e93854f08d","type":"Circle"},{"attributes":{"label":{"value":"virginica"},"renderers":[{"id":"b2e9bee2-2d94-4075-be3a-ed17cfa2abce","type":"GlyphRenderer"}]},"id":"b817e2cb-914d-4719-819e-358b7494d724","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf5333d2-ae20-452f-8465-e1a715496856","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":7.49,"start":0.4099999999999999},"id":"a13c8c2a-4348-4a74-a93b-3d2d9b55d5f5","type":"Range1d"},{"attributes":{"callback":null,"end":2.74,"start":-0.13999999999999999},"id":"9c8bd732-6601-425e-a7a2-320a5749af66","type":"Range1d"},{"attributes":{"below":[{"id":"a6ceef0e-6f7e-4de3-8ebd-1cb7fd3eca03","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"1f03f91f-ed81-432b-bae1-9019c4cba9e8","type":"LinearAxis"}],"renderers":[{"id":"cf5333d2-ae20-452f-8465-e1a715496856","type":"BoxAnnotation"},{"id":"b818646d-cbaa-428d-bf42-61b789818fe9","type":"GlyphRenderer"},{"id":"eda75d4e-68b8-41b5-8827-3d23cbc6d922","type":"GlyphRenderer"},{"id":"b2e9bee2-2d94-4075-be3a-ed17cfa2abce","type":"GlyphRenderer"},{"id":"3ce97e5a-76b3-4813-a616-7175feaeaa97","type":"Legend"},{"id":"a6ceef0e-6f7e-4de3-8ebd-1cb7fd3eca03","type":"LinearAxis"},{"id":"1f03f91f-ed81-432b-bae1-9019c4cba9e8","type":"LinearAxis"},{"id":"88bcc5ef-c54b-498c-9444-9cc44b25ac1c","type":"Grid"},{"id":"a5ad4da9-9ca2-4995-991f-07cd6e4e81fe","type":"Grid"}],"title":{"id":"b479d9a5-6859-4e4d-a1ab-0128aa4b842c","type":"Title"},"tool_events":{"id":"0640ba2c-7bd8-4eba-b02d-10e028513f42","type":"ToolEvents"},"toolbar":{"id":"e5f1aeca-c2c9-4fa1-b85b-609eb4d1c7c6","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"a13c8c2a-4348-4a74-a93b-3d2d9b55d5f5","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"9c8bd732-6601-425e-a7a2-320a5749af66","type":"Range1d"}},"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"}},"id":"0372ef1d-4bd8-4c81-a3f9-f07570421276","type":"HelpTool"},{"attributes":{},"id":"77b85749-4014-4909-95fd-31dd5646a9fe","type":"BasicTicker"},{"attributes":{"plot":{"id":"dfa4562a-6c03-4901-85b8-80e10da7ef60","subtype":"Chart","type":"Plot"}},"id":"88ba5449-28d1-4be1-a728-9e59b0693e33","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"}],"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"],"x_values":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2Pw==","dtype":"float64","shape":[50]},"y_values":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJPw==","dtype":"float64","shape":[50]}}},"id":"d4d57a5d-bffa-49c2-ab62-3bb7d63647d8","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"}],"species":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"],"x_values":{"__ndarray__":"zczMzMzMEkAAAAAAAAASQJqZmZmZmRNAAAAAAAAAEEBmZmZmZmYSQAAAAAAAABJAzczMzMzMEkBmZmZmZmYKQGZmZmZmZhJAMzMzMzMzD0AAAAAAAAAMQM3MzMzMzBBAAAAAAAAAEEDNzMzMzMwSQM3MzMzMzAxAmpmZmZmZEUAAAAAAAAASQGZmZmZmZhBAAAAAAAAAEkAzMzMzMzMPQDMzMzMzMxNAAAAAAAAAEECamZmZmZkTQM3MzMzMzBJAMzMzMzMzEUCamZmZmZkRQDMzMzMzMxNAAAAAAAAAFEAAAAAAAAASQAAAAAAAAAxAZmZmZmZmDkCamZmZmZkNQDMzMzMzMw9AZmZmZmZmFEAAAAAAAAASQAAAAAAAABJAzczMzMzMEkCamZmZmZkRQGZmZmZmZhBAAAAAAAAAEECamZmZmZkRQGZmZmZmZhJAAAAAAAAAEEBmZmZmZmYKQM3MzMzMzBBAzczMzMzMEEDNzMzMzMwQQDMzMzMzMxFAAAAAAAAACEBmZmZmZmYQQA==","dtype":"float64","shape":[50]},"y_values":{"__ndarray__":"ZmZmZmZm9j8AAAAAAAD4PwAAAAAAAPg/zczMzMzM9D8AAAAAAAD4P83MzMzMzPQ/mpmZmZmZ+T8AAAAAAADwP83MzMzMzPQ/ZmZmZmZm9j8AAAAAAADwPwAAAAAAAPg/AAAAAAAA8D9mZmZmZmb2P83MzMzMzPQ/ZmZmZmZm9j8AAAAAAAD4PwAAAAAAAPA/AAAAAAAA+D+amZmZmZnxP83MzMzMzPw/zczMzMzM9D8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PwAAAAAAAPA/mpmZmZmZ8T8AAAAAAADwPzMzMzMzM/M/mpmZmZmZ+T8AAAAAAAD4P5qZmZmZmfk/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D8zMzMzMzPzP2ZmZmZmZvY/MzMzMzMz8z8AAAAAAADwP83MzMzMzPQ/MzMzMzMz8z/NzMzMzMz0P83MzMzMzPQ/mpmZmZmZ8T/NzMzMzMz0Pw==","dtype":"float64","shape":[50]}}},"id":"ff2d3394-12d6-4d3b-9c26-9b02837d3229","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"}],"species":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"],"x_values":{"__ndarray__":"AAAAAAAAGEBmZmZmZmYUQJqZmZmZmRdAZmZmZmZmFkAzMzMzMzMXQGZmZmZmZhpAAAAAAAAAEkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmGEBmZmZmZmYUQDMzMzMzMxVAAAAAAAAAFkAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQM3MzMzMzBpAmpmZmZmZG0AAAAAAAAAUQM3MzMzMzBZAmpmZmZmZE0DNzMzMzMwaQJqZmZmZmRNAzczMzMzMFkAAAAAAAAAYQDMzMzMzMxNAmpmZmZmZE0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGECamZmZmZkZQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYWQGZmZmZmZhhAZmZmZmZmFkAAAAAAAAAWQDMzMzMzMxNAmpmZmZmZFUBmZmZmZmYWQGZmZmZmZhRAZmZmZmZmFECamZmZmZkXQM3MzMzMzBZAzczMzMzMFEAAAAAAAAAUQM3MzMzMzBRAmpmZmZmZFUBmZmZmZmYUQA==","dtype":"float64","shape":[50]},"y_values":{"__ndarray__":"AAAAAAAABEBmZmZmZmb+P83MzMzMzABAzczMzMzM/D+amZmZmZkBQM3MzMzMzABAMzMzMzMz+z/NzMzMzMz8P83MzMzMzPw/AAAAAAAABEAAAAAAAAAAQGZmZmZmZv4/zczMzMzMAEAAAAAAAAAAQDMzMzMzMwNAZmZmZmZmAkDNzMzMzMz8P5qZmZmZmQFAZmZmZmZmAkAAAAAAAAD4P2ZmZmZmZgJAAAAAAAAAAEAAAAAAAAAAQM3MzMzMzPw/zczMzMzMAEDNzMzMzMz8P83MzMzMzPw/zczMzMzM/D/NzMzMzMwAQJqZmZmZmfk/ZmZmZmZm/j8AAAAAAAAAQJqZmZmZmQFAAAAAAAAA+D9mZmZmZmb2P2ZmZmZmZgJAMzMzMzMzA0DNzMzMzMz8P83MzMzMzPw/zczMzMzMAEAzMzMzMzMDQGZmZmZmZgJAZmZmZmZm/j9mZmZmZmYCQAAAAAAAAARAZmZmZmZmAkBmZmZmZmb+PwAAAAAAAABAZmZmZmZmAkDNzMzMzMz8Pw==","dtype":"float64","shape":[50]}}},"id":"95cb91b0-1c50-4603-866f-f57eb9511c79","type":"ColumnDataSource"}],"root_ids":["dfa4562a-6c03-4901-85b8-80e10da7ef60"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"abacfcbf-52c0-4522-8242-cefffc4ba0f2","elementid":"220fa8a4-18ac-44f0-8d0f-611ea044c0ff","modelid":"dfa4562a-6c03-4901-85b8-80e10da7ef60"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
