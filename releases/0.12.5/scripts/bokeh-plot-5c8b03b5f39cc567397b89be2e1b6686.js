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
      };var element = document.getElementById("455e685d-d827-48e1-8e1a-fd51fcc803df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '455e685d-d827-48e1-8e1a-fd51fcc803df' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"3d58a7cb-094e-473a-90c1-0be3e183b11c":{"roots":{"references":[{"attributes":{},"id":"319ec077-eb4f-4954-95e3-a9db2d9b2b76","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"}],"species":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"],"x_values":{"__ndarray__":"AAAAAAAAGEBmZmZmZmYUQJqZmZmZmRdAZmZmZmZmFkAzMzMzMzMXQGZmZmZmZhpAAAAAAAAAEkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmGEBmZmZmZmYUQDMzMzMzMxVAAAAAAAAAFkAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQM3MzMzMzBpAmpmZmZmZG0AAAAAAAAAUQM3MzMzMzBZAmpmZmZmZE0DNzMzMzMwaQJqZmZmZmRNAzczMzMzMFkAAAAAAAAAYQDMzMzMzMxNAmpmZmZmZE0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGECamZmZmZkZQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYWQGZmZmZmZhhAZmZmZmZmFkAAAAAAAAAWQDMzMzMzMxNAmpmZmZmZFUBmZmZmZmYWQGZmZmZmZhRAZmZmZmZmFECamZmZmZkXQM3MzMzMzBZAzczMzMzMFEAAAAAAAAAUQM3MzMzMzBRAmpmZmZmZFUBmZmZmZmYUQA==","dtype":"float64","shape":[50]},"y_values":{"__ndarray__":"AAAAAAAABEBmZmZmZmb+P83MzMzMzABAzczMzMzM/D+amZmZmZkBQM3MzMzMzABAMzMzMzMz+z/NzMzMzMz8P83MzMzMzPw/AAAAAAAABEAAAAAAAAAAQGZmZmZmZv4/zczMzMzMAEAAAAAAAAAAQDMzMzMzMwNAZmZmZmZmAkDNzMzMzMz8P5qZmZmZmQFAZmZmZmZmAkAAAAAAAAD4P2ZmZmZmZgJAAAAAAAAAAEAAAAAAAAAAQM3MzMzMzPw/zczMzMzMAEDNzMzMzMz8P83MzMzMzPw/zczMzMzM/D/NzMzMzMwAQJqZmZmZmfk/ZmZmZmZm/j8AAAAAAAAAQJqZmZmZmQFAAAAAAAAA+D9mZmZmZmb2P2ZmZmZmZgJAMzMzMzMzA0DNzMzMzMz8P83MzMzMzPw/zczMzMzMAEAzMzMzMzMDQGZmZmZmZgJAZmZmZmZm/j9mZmZmZmYCQAAAAAAAAARAZmZmZmZmAkBmZmZmZmb+PwAAAAAAAABAZmZmZmZmAkDNzMzMzMz8Pw==","dtype":"float64","shape":[50]}}},"id":"31d3ad66-52ed-49fb-bf47-72d4972d5c5a","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"64c322f1-5d05-4460-b954-f7c18d4be12a","type":"LegendItem"},{"id":"4aa76b01-f044-4fde-b06d-84304e301a1d","type":"LegendItem"},{"id":"f7e1bb04-7656-49c3-bc40-6ebb73062178","type":"LegendItem"}],"location":"top_left","plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"}},"id":"6b13dc1e-8e43-491b-90ef-2c015c6aa9b9","type":"Legend"},{"attributes":{"data_source":{"id":"02710c78-fb9f-4fbb-9dbc-83ba4017c7a0","type":"ColumnDataSource"},"glyph":{"id":"63b5504b-3a50-46f1-b6e7-fa145805cfaa","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"9fb36b7f-0ef9-4f2c-a16d-4d88efc6a4c6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"412d97a2-92ca-48f1-a9a9-d29e1b01385c","type":"ColumnDataSource"},"glyph":{"id":"3c18f4c4-230b-4956-9947-3321fc7cc7f9","type":"Square"},"hover_glyph":null,"muted_glyph":null},"id":"35771b01-4dba-42c9-9b3f-efaeb3cb7914","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"}],"species":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"],"x_values":{"__ndarray__":"zczMzMzMEkAAAAAAAAASQJqZmZmZmRNAAAAAAAAAEEBmZmZmZmYSQAAAAAAAABJAzczMzMzMEkBmZmZmZmYKQGZmZmZmZhJAMzMzMzMzD0AAAAAAAAAMQM3MzMzMzBBAAAAAAAAAEEDNzMzMzMwSQM3MzMzMzAxAmpmZmZmZEUAAAAAAAAASQGZmZmZmZhBAAAAAAAAAEkAzMzMzMzMPQDMzMzMzMxNAAAAAAAAAEECamZmZmZkTQM3MzMzMzBJAMzMzMzMzEUCamZmZmZkRQDMzMzMzMxNAAAAAAAAAFEAAAAAAAAASQAAAAAAAAAxAZmZmZmZmDkCamZmZmZkNQDMzMzMzMw9AZmZmZmZmFEAAAAAAAAASQAAAAAAAABJAzczMzMzMEkCamZmZmZkRQGZmZmZmZhBAAAAAAAAAEECamZmZmZkRQGZmZmZmZhJAAAAAAAAAEEBmZmZmZmYKQM3MzMzMzBBAzczMzMzMEEDNzMzMzMwQQDMzMzMzMxFAAAAAAAAACEBmZmZmZmYQQA==","dtype":"float64","shape":[50]},"y_values":{"__ndarray__":"ZmZmZmZm9j8AAAAAAAD4PwAAAAAAAPg/zczMzMzM9D8AAAAAAAD4P83MzMzMzPQ/mpmZmZmZ+T8AAAAAAADwP83MzMzMzPQ/ZmZmZmZm9j8AAAAAAADwPwAAAAAAAPg/AAAAAAAA8D9mZmZmZmb2P83MzMzMzPQ/ZmZmZmZm9j8AAAAAAAD4PwAAAAAAAPA/AAAAAAAA+D+amZmZmZnxP83MzMzMzPw/zczMzMzM9D8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PwAAAAAAAPA/mpmZmZmZ8T8AAAAAAADwPzMzMzMzM/M/mpmZmZmZ+T8AAAAAAAD4P5qZmZmZmfk/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D8zMzMzMzPzP2ZmZmZmZvY/MzMzMzMz8z8AAAAAAADwP83MzMzMzPQ/MzMzMzMz8z/NzMzMzMz0P83MzMzMzPQ/mpmZmZmZ8T/NzMzMzMz0Pw==","dtype":"float64","shape":[50]}}},"id":"412d97a2-92ca-48f1-a9a9-d29e1b01385c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"31d3ad66-52ed-49fb-bf47-72d4972d5c5a","type":"ColumnDataSource"},"glyph":{"id":"7f4b529d-1c2e-45b2-a504-c07ffa7af290","type":"Triangle"},"hover_glyph":null,"muted_glyph":null},"id":"264f0aa7-dc9d-4061-bce7-b4a3acc583a1","type":"GlyphRenderer"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"7425c7e2-37e6-4426-8c80-ac3d22a89ebf","type":"BasicTickFormatter"},"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"},"ticker":{"id":"4e07ecae-9ba3-4833-9add-6d357b598a55","type":"BasicTicker"}},"id":"0ceb625d-2e45-466f-829e-35169fbd96d2","type":"LinearAxis"},{"attributes":{"label":{"value":"setosa"},"renderers":[{"id":"9fb36b7f-0ef9-4f2c-a16d-4d88efc6a4c6","type":"GlyphRenderer"}]},"id":"64c322f1-5d05-4460-b954-f7c18d4be12a","type":"LegendItem"},{"attributes":{"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"}},"id":"2ff4ed8d-7dcb-43be-9390-41b674f001fc","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"521bf070-3ff9-496d-96dc-bc931d7db9a0","type":"BoxAnnotation"},{"attributes":{},"id":"441f0822-2d93-4657-abad-c75d52c61ef1","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"},"ticker":{"id":"10dcfefd-5cc2-4783-ab3a-68d53f1b804b","type":"BasicTicker"}},"id":"450315ab-a500-4d3b-912f-a8563af0efbd","type":"Grid"},{"attributes":{},"id":"4e07ecae-9ba3-4833-9add-6d357b598a55","type":"BasicTicker"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"441f0822-2d93-4657-abad-c75d52c61ef1","type":"BasicTickFormatter"},"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"},"ticker":{"id":"10dcfefd-5cc2-4783-ab3a-68d53f1b804b","type":"BasicTicker"}},"id":"9490be64-f828-409a-af79-d5eb9c3385ad","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Iris Dataset Color and Marker by Species"},"id":"4d4ebe46-e068-4502-9ed5-86ec3a2afefa","type":"Title"},{"attributes":{"callback":null,"end":2.74,"start":-0.13999999999999999},"id":"a943d4ed-ceb8-4b4c-9353-6ec04cd1b799","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"63b5504b-3a50-46f1-b6e7-fa145805cfaa","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3c18f4c4-230b-4956-9947-3321fc7cc7f9","type":"Square"},{"attributes":{"overlay":{"id":"521bf070-3ff9-496d-96dc-bc931d7db9a0","type":"BoxAnnotation"},"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"}},"id":"fba335a0-3723-4267-8a31-25bdfd6f14c4","type":"BoxZoomTool"},{"attributes":{},"id":"10dcfefd-5cc2-4783-ab3a-68d53f1b804b","type":"BasicTicker"},{"attributes":{"label":{"value":"versicolor"},"renderers":[{"id":"35771b01-4dba-42c9-9b3f-efaeb3cb7914","type":"GlyphRenderer"}]},"id":"4aa76b01-f044-4fde-b06d-84304e301a1d","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2ff4ed8d-7dcb-43be-9390-41b674f001fc","type":"PanTool"},{"id":"646fc159-8646-4f9e-934f-e74bc2720724","type":"WheelZoomTool"},{"id":"fba335a0-3723-4267-8a31-25bdfd6f14c4","type":"BoxZoomTool"},{"id":"cbc944fa-83db-4aba-a0b4-50dfe3a28d18","type":"SaveTool"},{"id":"f3d3fcb3-69e7-4250-a2f7-b621b206efd8","type":"ResetTool"},{"id":"34ec6d9c-c60c-42e6-aa22-0e3ae75f9b85","type":"HelpTool"}]},"id":"cb316e41-a5da-4032-9610-356c7363f3fb","type":"Toolbar"},{"attributes":{"callback":null,"end":7.49,"start":0.4099999999999999},"id":"3a52abef-16e5-4902-a0e0-bf01cff0919c","type":"Range1d"},{"attributes":{"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"},"ticker":{"id":"4e07ecae-9ba3-4833-9add-6d357b598a55","type":"BasicTicker"}},"id":"ff7f69e9-6e28-496d-87a3-162ff8f4e0b4","type":"Grid"},{"attributes":{"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"}},"id":"f3d3fcb3-69e7-4250-a2f7-b621b206efd8","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"}],"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"],"x_values":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2Pw==","dtype":"float64","shape":[50]},"y_values":{"__ndarray__":"mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZnJP5qZmZmZmck/mpmZmZmZuT+amZmZmZm5P5qZmZmZmck/mpmZmZmZ2T+amZmZmZnZPzMzMzMzM9M/MzMzMzMz0z8zMzMzMzPTP5qZmZmZmck/mpmZmZmZ2T+amZmZmZnJPwAAAAAAAOA/mpmZmZmZyT+amZmZmZnJP5qZmZmZmdk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnZP5qZmZmZmbk/mpmZmZmZyT+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZm5P5qZmZmZmck/mpmZmZmZyT8zMzMzMzPTPzMzMzMzM9M/mpmZmZmZyT8zMzMzMzPjP5qZmZmZmdk/MzMzMzMz0z+amZmZmZnJP5qZmZmZmck/mpmZmZmZyT+amZmZmZnJPw==","dtype":"float64","shape":[50]}}},"id":"02710c78-fb9f-4fbb-9dbc-83ba4017c7a0","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"0ceb625d-2e45-466f-829e-35169fbd96d2","type":"LinearAxis"}],"css_classes":null,"height":400,"left":[{"id":"9490be64-f828-409a-af79-d5eb9c3385ad","type":"LinearAxis"}],"renderers":[{"id":"521bf070-3ff9-496d-96dc-bc931d7db9a0","type":"BoxAnnotation"},{"id":"9fb36b7f-0ef9-4f2c-a16d-4d88efc6a4c6","type":"GlyphRenderer"},{"id":"35771b01-4dba-42c9-9b3f-efaeb3cb7914","type":"GlyphRenderer"},{"id":"264f0aa7-dc9d-4061-bce7-b4a3acc583a1","type":"GlyphRenderer"},{"id":"6b13dc1e-8e43-491b-90ef-2c015c6aa9b9","type":"Legend"},{"id":"0ceb625d-2e45-466f-829e-35169fbd96d2","type":"LinearAxis"},{"id":"9490be64-f828-409a-af79-d5eb9c3385ad","type":"LinearAxis"},{"id":"ff7f69e9-6e28-496d-87a3-162ff8f4e0b4","type":"Grid"},{"id":"450315ab-a500-4d3b-912f-a8563af0efbd","type":"Grid"}],"title":{"id":"4d4ebe46-e068-4502-9ed5-86ec3a2afefa","type":"Title"},"tool_events":{"id":"319ec077-eb4f-4954-95e3-a9db2d9b2b76","type":"ToolEvents"},"toolbar":{"id":"cb316e41-a5da-4032-9610-356c7363f3fb","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"3a52abef-16e5-4902-a0e0-bf01cff0919c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a943d4ed-ceb8-4b4c-9353-6ec04cd1b799","type":"Range1d"}},"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7f4b529d-1c2e-45b2-a504-c07ffa7af290","type":"Triangle"},{"attributes":{},"id":"7425c7e2-37e6-4426-8c80-ac3d22a89ebf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"}},"id":"646fc159-8646-4f9e-934f-e74bc2720724","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"}},"id":"cbc944fa-83db-4aba-a0b4-50dfe3a28d18","type":"SaveTool"},{"attributes":{"label":{"value":"virginica"},"renderers":[{"id":"264f0aa7-dc9d-4061-bce7-b4a3acc583a1","type":"GlyphRenderer"}]},"id":"f7e1bb04-7656-49c3-bc40-6ebb73062178","type":"LegendItem"},{"attributes":{"plot":{"id":"ac6e9331-6bea-4255-81e7-e5884bfe9703","subtype":"Chart","type":"Plot"}},"id":"34ec6d9c-c60c-42e6-aa22-0e3ae75f9b85","type":"HelpTool"}],"root_ids":["ac6e9331-6bea-4255-81e7-e5884bfe9703"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"3d58a7cb-094e-473a-90c1-0be3e183b11c","elementid":"455e685d-d827-48e1-8e1a-fd51fcc803df","modelid":"ac6e9331-6bea-4255-81e7-e5884bfe9703"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
