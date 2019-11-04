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
      };var element = document.getElementById("92ec57e1-0521-4d34-b275-97bb7d8cba29");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '92ec57e1-0521-4d34-b275-97bb7d8cba29' but no matching script tag was found. ")
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
                var docs_json = {"d0797373-89ad-49cf-967a-dae8d831aec2":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#00ad9c"},"line_color":{"value":"#00ad9c"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"d5a69407-1b09-4641-84a4-c4afc64149ed","type":"Circle"},{"attributes":{"axis_label":"Horsepower","formatter":{"id":"dc4d9d72-9793-428f-9edc-7f3d3d1f91e9","type":"BasicTickFormatter"},"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"},"ticker":{"id":"7f33a6ff-be23-407b-b60e-f8f56a0bea91","type":"BasicTicker"}},"id":"0719f66a-858b-4121-bc53-6e64376030c4","type":"LinearAxis"},{"attributes":{"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"},"ticker":{"id":"9809bbf3-7ce4-4119-9f18-cbcb767e8b34","type":"BasicTicker"}},"id":"339b8235-2cb0-4f15-bb55-4b63de1c594e","type":"Grid"},{"attributes":{"callback":null,"end":248.4,"start":27.599999999999998},"id":"340f2f84-1a0f-4c3a-9e9f-e0609156576d","type":"Range1d"},{"attributes":{},"id":"dc4d9d72-9793-428f-9edc-7f3d3d1f91e9","type":"BasicTickFormatter"},{"attributes":{},"id":"7f33a6ff-be23-407b-b60e-f8f56a0bea91","type":"BasicTicker"},{"attributes":{},"id":"2e39a56e-d095-47a4-b2ea-70d2bc8646ef","type":"ToolEvents"},{"attributes":{"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"}},"id":"558b4b59-02b0-426c-bc3b-4e91e9d83cae","type":"ResetTool"},{"attributes":{"plot":null,"text":"MPG vs HP (colored by CYL)"},"id":"dfc07d1e-8a7f-4ec1-9496-d16a055b9cd2","type":"Title"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#df5320"},"line_color":{"value":"#df5320"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"0d1c9a96-db14-4c43-b994-d651d886e171","type":"Circle"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":3},{"cyl":3},{"cyl":3},{"cyl":3}],"cyl":[3,3,3,3],"x_values":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAgDVAMzMzMzOzN0A=","dtype":"float64","shape":[4]},"y_values":[97,90,110,100]}},"id":"aaf56bf9-aae5-4497-a282-b7715eb32aca","type":"ColumnDataSource"},{"attributes":{},"id":"2e857a07-3b17-430f-9146-2c3807cb0db6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8},{"cyl":8}],"cyl":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"x_values":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAACRAAAAAAAAAJEAAAAAAAAAmQAAAAAAAACJAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALEAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADFAAAAAAAAAJkAAAAAAAAAqQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAuQAAAAAAAACpAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAqQAAAAAAAACxAAAAAAAAALkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACZAAAAAAAAAKEAAAAAAAAAqQAAAAAAAAChAAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAJkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADBAAAAAAAAALEAAAAAAAAA0QAAAAAAAACpAAAAAAACAMUAAAAAAAAAwQAAAAAAAAC9AAAAAAAAALUAAAAAAAAAqQAAAAAAAgDBAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACpAAAAAAACAMUAAAAAAAAAxQAAAAAAAAC9AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAmpmZmZkZMkAAAAAAAIAxQAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkAAAAAAAAA3QGZmZmZm5jdAmpmZmZmZOkA=","dtype":"float64","shape":[103]},"y_values":[130,165,150,150,140,198,220,215,225,190,170,160,150,225,215,200,210,193,165,175,153,150,180,170,175,165,175,150,153,150,208,155,160,190,150,130,140,150,175,150,145,137,150,198,150,158,150,215,225,175,150,167,170,180,145,230,150,180,140,150,150,140,150,170,145,150,148,110,129,140,150,120,152,150,180,145,130,150,145,110,145,130,180,170,190,149,110,140,139,145,139,140,130,129,138,135,155,142,125,150,125,90,105]}},"id":"673bd1ac-8110-4527-83a1-19cdead0f5b3","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"},"ticker":{"id":"7f33a6ff-be23-407b-b60e-f8f56a0bea91","type":"BasicTicker"}},"id":"da596065-70f9-4528-a778-2a131c912895","type":"Grid"},{"attributes":{},"id":"9809bbf3-7ce4-4119-9f18-cbcb767e8b34","type":"BasicTicker"},{"attributes":{"label":{"value":"8"},"renderers":[{"id":"35af8f0f-48e9-4c8e-96ea-cb714eccd5fe","type":"GlyphRenderer"}]},"id":"636df5ec-9dda-4e5f-8e46-a593793a9d49","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c8591097-6704-4379-9e93-f71b19cba72a","type":"PanTool"},{"id":"a3b09be9-0365-49a9-8102-b0173a7c0384","type":"WheelZoomTool"},{"id":"56db7bd9-b4ce-49c1-a653-786d4e6c2f10","type":"BoxZoomTool"},{"id":"93bef51f-3dd2-441b-8745-15917f076c43","type":"SaveTool"},{"id":"558b4b59-02b0-426c-bc3b-4e91e9d83cae","type":"ResetTool"},{"id":"3e3cd115-f4c5-4a73-aa96-a4234cb3153f","type":"HelpTool"}]},"id":"342f1d5a-1539-4ba6-af91-069a4c076752","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"1ca71ecc-4214-4d9b-88c6-3488cc659d3d","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"bcc185d5-881d-4a84-975e-3dc856feaa4c","type":"Circle"},{"attributes":{"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"}},"id":"a3b09be9-0365-49a9-8102-b0173a7c0384","type":"WheelZoomTool"},{"attributes":{"label":{"value":"5"},"renderers":[{"id":"95e7ab92-07a5-4dba-b9ba-3fec0650db7f","type":"GlyphRenderer"}]},"id":"38ba06cd-6c01-4f4e-9e1c-43121d78ffcc","type":"LegendItem"},{"attributes":{"label":{"value":"6"},"renderers":[{"id":"c31f23f3-0c07-4b61-9e68-fb91d9a9f28c","type":"GlyphRenderer"}]},"id":"dcbb656b-0e58-4339-a2ba-3196df0827a5","type":"LegendItem"},{"attributes":{"overlay":{"id":"90a96613-359f-4a46-bd91-592d008f5d17","type":"BoxAnnotation"},"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"}},"id":"56db7bd9-b4ce-49c1-a653-786d4e6c2f10","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6},{"cyl":6}],"cyl":[6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"x_values":{"__ndarray__":"AAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAANUAAAAAAAAAzQAAAAAAAADBAAAAAAAAAMUAAAAAAAAAzQAAAAAAAADJAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADJAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAADRAAAAAAAAAM0AAAAAAAAAuQAAAAAAAADBAAAAAAAAAMEAAAAAAAAAyQAAAAAAAADNAAAAAAAAAMkAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMUAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMkAAAAAAAAA1QAAAAAAAADRAAAAAAAAAMkAAAAAAAAAzQAAAAAAAADZAAAAAAAAANkAAAAAAAAA4QAAAAAAAgDZAAAAAAAAANEAAAAAAAAAyQAAAAAAAgDJAAAAAAACAMUAAAAAAAAAzQAAAAAAAgDBAAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAA2QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QAAAAAAAgDRAZmZmZmZmM0CamZmZmZk0QM3MzMzMzDRAmpmZmZmZMkCamZmZmRkyQDMzMzMzszFAAAAAAAAAMUAzMzMzMzMwQAAAAAAAgDVAzczMzMzMM0AzMzMzMzM0QJqZmZmZmTRAzczMzMzMPEDNzMzMzMw6QJqZmZmZGTNAmpmZmZlZQEAAAAAAAIA3QDMzMzMzsz5AZmZmZmZmOUAzMzMzMzM4QGZmZmZmZjZAMzMzMzMzNECamZmZmZkxQAAAAAAAADlAAAAAAAAAQ0AAAAAAAAA2QA==","dtype":"float64","shape":[83]},"y_values":[95,97,85,90,100,105,100,88,100,110,100,88,105,100,100,88,95,100,107,122,95,100,100,100,110,105,95,105,72,72,110,105,110,95,110,100,97,90,100,105,81,90,100,78,110,95,108,120,110,105,100,98,97,105,95,85,100,90,105,85,110,120,165,125,133,115,85,90,110,115,115,90,132,110,76,116,120,110,88,85,110,85,112]}},"id":"49a88b15-61c0-4891-baf3-8d7df8f21b76","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"636df5ec-9dda-4e5f-8e46-a593793a9d49","type":"LegendItem"},{"id":"175789de-929e-48b5-8f0c-b64ce61ef20b","type":"LegendItem"},{"id":"dcbb656b-0e58-4339-a2ba-3196df0827a5","type":"LegendItem"},{"id":"5f945533-9320-4019-8075-7f88b19a4074","type":"LegendItem"},{"id":"38ba06cd-6c01-4f4e-9e1c-43121d78ffcc","type":"LegendItem"}],"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"}},"id":"15fe7d85-68e8-456d-a034-8131f882db64","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b163697d-9a42-4f89-bafd-ec5db134433b","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"90a96613-359f-4a46-bd91-592d008f5d17","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"}},"id":"3e3cd115-f4c5-4a73-aa96-a4234cb3153f","type":"HelpTool"},{"attributes":{"callback":null,"end":50.36,"start":5.24},"id":"9d59ea9a-eb76-4fac-8566-e373a4400a3b","type":"Range1d"},{"attributes":{"data_source":{"id":"57cb7337-bf89-478d-aae3-e490566b5c17","type":"ColumnDataSource"},"glyph":{"id":"b163697d-9a42-4f89-bafd-ec5db134433b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"95e7ab92-07a5-4dba-b9ba-3fec0650db7f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"}},"id":"93bef51f-3dd2-441b-8745-15917f076c43","type":"SaveTool"},{"attributes":{"label":{"value":"4"},"renderers":[{"id":"48b9cc0e-154c-4c85-945d-2cfe66d05167","type":"GlyphRenderer"}]},"id":"175789de-929e-48b5-8f0c-b64ce61ef20b","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":5},{"cyl":5},{"cyl":5}],"cyl":[5,5,5],"x_values":{"__ndarray__":"zczMzMxMNEBmZmZmZmY5QDMzMzMzM0JA","dtype":"float64","shape":[3]},"y_values":[103,77,67]}},"id":"57cb7337-bf89-478d-aae3-e490566b5c17","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4},{"cyl":4}],"cyl":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"x_values":{"__ndarray__":"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","dtype":"float64","shape":[199]},"y_values":[95,88,46,87,90,95,113,88,90,95,72,86,90,70,76,65,69,60,70,95,80,54,90,86,112,76,87,69,86,92,97,80,88,46,88,72,94,85,90,49,75,91,112,110,67,80,65,75,83,67,78,52,61,75,75,75,97,93,67,75,83,78,96,71,97,70,95,88,98,115,53,86,81,92,79,83,52,60,70,53,71,70,75,72,102,88,68,80,58,96,70,78,88,75,89,63,83,67,78,110,48,66,52,70,60,88,68,95,97,75,95,105,85,97,115,71,68,88,71,65,80,80,71,70,70,65,69,90,90,76,60,70,65,90,88,90,78,90,75,92,75,65,105,65,48,48,67,67,67,62,88,72,84,84,92,84,58,64,60,67,65,62,68,63,65,65,74,75,75,100,74,80,88,88,88,85,84,90,92,74,68,68,63,70,88,75,70,67,67,67,92,96,84,90,86,52,84,79,82]}},"id":"2319197d-220d-4d33-aad1-96d94472e852","type":"ColumnDataSource"},{"attributes":{"label":{"value":"3"},"renderers":[{"id":"80b6dc4e-95c7-4d62-a950-fc458d2c1934","type":"GlyphRenderer"}]},"id":"5f945533-9320-4019-8075-7f88b19a4074","type":"LegendItem"},{"attributes":{"data_source":{"id":"2319197d-220d-4d33-aad1-96d94472e852","type":"ColumnDataSource"},"glyph":{"id":"bcc185d5-881d-4a84-975e-3dc856feaa4c","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"48b9cc0e-154c-4c85-945d-2cfe66d05167","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"}},"id":"c8591097-6704-4379-9e93-f71b19cba72a","type":"PanTool"},{"attributes":{"data_source":{"id":"49a88b15-61c0-4891-baf3-8d7df8f21b76","type":"ColumnDataSource"},"glyph":{"id":"0d1c9a96-db14-4c43-b994-d651d886e171","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c31f23f3-0c07-4b61-9e68-fb91d9a9f28c","type":"GlyphRenderer"},{"attributes":{"axis_label":"Miles Per Gallon","formatter":{"id":"2e857a07-3b17-430f-9146-2c3807cb0db6","type":"BasicTickFormatter"},"plot":{"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"},"ticker":{"id":"9809bbf3-7ce4-4119-9f18-cbcb767e8b34","type":"BasicTicker"}},"id":"8cc8b1c9-246c-4ae9-bb01-bba066ba5b1f","type":"LinearAxis"},{"attributes":{"below":[{"id":"8cc8b1c9-246c-4ae9-bb01-bba066ba5b1f","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"0719f66a-858b-4121-bc53-6e64376030c4","type":"LinearAxis"}],"renderers":[{"id":"90a96613-359f-4a46-bd91-592d008f5d17","type":"BoxAnnotation"},{"id":"35af8f0f-48e9-4c8e-96ea-cb714eccd5fe","type":"GlyphRenderer"},{"id":"48b9cc0e-154c-4c85-945d-2cfe66d05167","type":"GlyphRenderer"},{"id":"c31f23f3-0c07-4b61-9e68-fb91d9a9f28c","type":"GlyphRenderer"},{"id":"80b6dc4e-95c7-4d62-a950-fc458d2c1934","type":"GlyphRenderer"},{"id":"95e7ab92-07a5-4dba-b9ba-3fec0650db7f","type":"GlyphRenderer"},{"id":"15fe7d85-68e8-456d-a034-8131f882db64","type":"Legend"},{"id":"8cc8b1c9-246c-4ae9-bb01-bba066ba5b1f","type":"LinearAxis"},{"id":"0719f66a-858b-4121-bc53-6e64376030c4","type":"LinearAxis"},{"id":"339b8235-2cb0-4f15-bb55-4b63de1c594e","type":"Grid"},{"id":"da596065-70f9-4528-a778-2a131c912895","type":"Grid"}],"title":{"id":"dfc07d1e-8a7f-4ec1-9496-d16a055b9cd2","type":"Title"},"tool_events":{"id":"2e39a56e-d095-47a4-b2ea-70d2bc8646ef","type":"ToolEvents"},"toolbar":{"id":"342f1d5a-1539-4ba6-af91-069a4c076752","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"9d59ea9a-eb76-4fac-8566-e373a4400a3b","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"340f2f84-1a0f-4c3a-9e9f-e0609156576d","type":"Range1d"}},"id":"1c995e3a-2717-4af9-bf67-caf637b0789e","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"673bd1ac-8110-4527-83a1-19cdead0f5b3","type":"ColumnDataSource"},"glyph":{"id":"d5a69407-1b09-4641-84a4-c4afc64149ed","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"35af8f0f-48e9-4c8e-96ea-cb714eccd5fe","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"aaf56bf9-aae5-4497-a282-b7715eb32aca","type":"ColumnDataSource"},"glyph":{"id":"1ca71ecc-4214-4d9b-88c6-3488cc659d3d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"80b6dc4e-95c7-4d62-a950-fc458d2c1934","type":"GlyphRenderer"}],"root_ids":["1c995e3a-2717-4af9-bf67-caf637b0789e"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"d0797373-89ad-49cf-967a-dae8d831aec2","elementid":"92ec57e1-0521-4d34-b275-97bb7d8cba29","modelid":"1c995e3a-2717-4af9-bf67-caf637b0789e"}];
                
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