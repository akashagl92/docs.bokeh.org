(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("089c4de0-9d5c-4901-8da6-04eb53ba7930");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '089c4de0-9d5c-4901-8da6-04eb53ba7930' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"336619cf-731d-40b2-a6f7-c2dc82c6fd0a":{"roots":{"references":[{"attributes":{},"id":"8fcde610-4173-44c1-9086-44a3f3d18165","type":"LinearScale"},{"attributes":{"below":[{"id":"3125edec-aa56-4eba-b961-5c3c6f384192","type":"LinearAxis"}],"left":[{"id":"c1a97b2b-6f6a-4a07-a280-833c3aec7625","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"3125edec-aa56-4eba-b961-5c3c6f384192","type":"LinearAxis"},{"id":"87852551-eb40-4328-925a-4ee93009f30b","type":"Grid"},{"id":"c1a97b2b-6f6a-4a07-a280-833c3aec7625","type":"LinearAxis"},{"id":"41e0a0af-16d2-4a43-82d2-07891741ff75","type":"Grid"},{"id":"f37af173-1d7a-4743-af57-0fb074346cbf","type":"BoxAnnotation"},{"id":"6d123ee4-78fc-414b-a462-4a3cbfea731e","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"140b6b14-5c3d-4e2a-acfe-f6b4356331c3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dd704a36-73db-4bf7-9939-a91c115367a1","type":"DataRange1d"},"x_scale":{"id":"b9a61813-4152-4d29-b2c2-1d06284a1f59","type":"LinearScale"},"y_range":{"id":"5cef73dc-f84a-4d9f-8b3d-2f9c25394862","type":"DataRange1d"},"y_scale":{"id":"48e36d84-d7de-442c-8f86-d97e49a04903","type":"LinearScale"}},"id":"306eed39-4ae8-4a54-8b65-621c215309da","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b31a5013-50ea-481d-b169-e2d3353b590f","type":"SaveTool"},{"attributes":{},"id":"9b67eb2b-26f1-4165-824a-29b8d2185dc1","type":"PanTool"},{"attributes":{},"id":"cd9f3337-3382-4f70-899d-272a45f5a1f9","type":"HelpTool"},{"attributes":{"below":[{"id":"56d7e4b2-0df5-44ca-a878-6aaa810a552c","type":"LinearAxis"}],"left":[{"id":"a34825a2-32e0-4d83-bc75-0dcf797d5642","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"56d7e4b2-0df5-44ca-a878-6aaa810a552c","type":"LinearAxis"},{"id":"646fd7b9-97c4-4fa8-965a-759c8c49dae3","type":"Grid"},{"id":"a34825a2-32e0-4d83-bc75-0dcf797d5642","type":"LinearAxis"},{"id":"0674fcb1-f062-48f2-818a-eced1a6a54d7","type":"Grid"},{"id":"732fd838-a60e-4715-938c-6d2aa54f706f","type":"BoxAnnotation"},{"id":"996f43b7-01d8-416a-bc83-ad8ebde2048a","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"a560e187-1ddb-409b-b633-ec01bd1e62ea","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dd704a36-73db-4bf7-9939-a91c115367a1","type":"DataRange1d"},"x_scale":{"id":"8fcde610-4173-44c1-9086-44a3f3d18165","type":"LinearScale"},"y_range":{"id":"f0fac491-8ee4-407f-b783-f1c1b800a1c0","type":"DataRange1d"},"y_scale":{"id":"e4a2acb0-2b97-4de2-b8b4-8d2d89901d00","type":"LinearScale"}},"id":"226aa90f-14d9-40aa-a1ad-5d246b9ff8d7","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"306eed39-4ae8-4a54-8b65-621c215309da","subtype":"Figure","type":"Plot"},{"id":"7dd56992-7442-436d-abde-2b9dca973540","subtype":"Figure","type":"Plot"},{"id":"226aa90f-14d9-40aa-a1ad-5d246b9ff8d7","subtype":"Figure","type":"Plot"}]},"id":"bad39957-2526-4032-94bc-45506ee3a360","type":"Row"},{"attributes":{"callback":null},"id":"dd704a36-73db-4bf7-9939-a91c115367a1","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c1c5fa16-50fe-4599-aa27-e03b8037cf26","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"e4b12bbc-ff5f-491c-8e82-5e9a1a82eb2a","type":"LinearAxis"}],"left":[{"id":"8bc344e9-57d1-4ec6-b684-f88fe0fdbdab","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e4b12bbc-ff5f-491c-8e82-5e9a1a82eb2a","type":"LinearAxis"},{"id":"18ae6e73-e836-48e9-b559-4fec39686346","type":"Grid"},{"id":"8bc344e9-57d1-4ec6-b684-f88fe0fdbdab","type":"LinearAxis"},{"id":"ebff058d-69d2-4241-a3d8-cff95b873bcf","type":"Grid"},{"id":"c1c5fa16-50fe-4599-aa27-e03b8037cf26","type":"BoxAnnotation"},{"id":"1df81487-dada-4cc4-bb42-0f72eeafcbb9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"e7114a36-c39e-401d-aa02-677639d94542","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"dd704a36-73db-4bf7-9939-a91c115367a1","type":"DataRange1d"},"x_scale":{"id":"b375d10e-aa8c-42a4-9837-e4498971e82a","type":"LinearScale"},"y_range":{"id":"5cef73dc-f84a-4d9f-8b3d-2f9c25394862","type":"DataRange1d"},"y_scale":{"id":"c7a56e44-d059-4539-bd6b-0a89ba21d525","type":"LinearScale"}},"id":"7dd56992-7442-436d-abde-2b9dca973540","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"26b2095d-f0c3-4540-9f7d-8c29d5314b1b","type":"BasicTickFormatter"},"plot":{"id":"306eed39-4ae8-4a54-8b65-621c215309da","subtype":"Figure","type":"Plot"},"ticker":{"id":"617ea8dd-f3c0-40cf-8d30-38bcd547f50e","type":"BasicTicker"}},"id":"3125edec-aa56-4eba-b961-5c3c6f384192","type":"LinearAxis"},{"attributes":{},"id":"72484fc1-55fc-4ec6-95c7-bee44259e722","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f37af173-1d7a-4743-af57-0fb074346cbf","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"226aa90f-14d9-40aa-a1ad-5d246b9ff8d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eede7060-89ea-4b92-a362-990c688ad30e","type":"BasicTicker"}},"id":"0674fcb1-f062-48f2-818a-eced1a6a54d7","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"d977085e-3301-4f1a-afdb-70bf3ff46446","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"306eed39-4ae8-4a54-8b65-621c215309da","subtype":"Figure","type":"Plot"},"ticker":{"id":"851e6fd9-5afa-441a-8462-1277acde811a","type":"BasicTicker"}},"id":"41e0a0af-16d2-4a43-82d2-07891741ff75","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3668d1ca-4258-4c26-8225-1c57da83622f","type":"Circle"},{"attributes":{"children":[{"id":"bad39957-2526-4032-94bc-45506ee3a360","type":"Row"}]},"id":"a443d719-ce30-4ea5-98ef-b237d542fb43","type":"Column"},{"attributes":{},"id":"26b2095d-f0c3-4540-9f7d-8c29d5314b1b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"9b51585d-c663-40de-86ca-86ffbabdc0c3","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0dd89007-c611-4b65-8ae4-61d0de494c63","type":"PanTool"},{"id":"6c86826f-5204-468d-b1e0-329be824c9ad","type":"WheelZoomTool"},{"id":"d7de09ad-6975-437c-97da-6cb086f1cb19","type":"BoxZoomTool"},{"id":"fdebc5a9-8cb9-40e4-8c8d-d96e4ada5b04","type":"SaveTool"},{"id":"27f94501-5577-4efd-894f-6969f0a68e47","type":"ResetTool"},{"id":"c8f73667-188f-4770-bde6-ea7c9e936571","type":"HelpTool"}]},"id":"140b6b14-5c3d-4e2a-acfe-f6b4356331c3","type":"Toolbar"},{"attributes":{"overlay":{"id":"f37af173-1d7a-4743-af57-0fb074346cbf","type":"BoxAnnotation"}},"id":"d7de09ad-6975-437c-97da-6cb086f1cb19","type":"BoxZoomTool"},{"attributes":{},"id":"dccb1710-1193-4652-83b8-08b344a0ead1","type":"BasicTicker"},{"attributes":{},"id":"dffcd80a-be59-4e98-8e43-9246e288c494","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"226aa90f-14d9-40aa-a1ad-5d246b9ff8d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"dccb1710-1193-4652-83b8-08b344a0ead1","type":"BasicTicker"}},"id":"646fd7b9-97c4-4fa8-965a-759c8c49dae3","type":"Grid"},{"attributes":{},"id":"67e7a2e1-b052-4579-a3ad-1b44f5c274fc","type":"ResetTool"},{"attributes":{},"id":"48e36d84-d7de-442c-8f86-d97e49a04903","type":"LinearScale"},{"attributes":{"data_source":{"id":"2e1dc4b4-aaa2-4b1b-a0d1-84c530e410e0","type":"ColumnDataSource"},"glyph":{"id":"87642136-1053-476c-8c3d-e4fabd91e995","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1d55b10f-2717-4024-94b9-d42386341d39","type":"Square"},"selection_glyph":null,"view":{"id":"f1da75b5-071f-48fa-9971-bafc2dbb8a5f","type":"CDSView"}},"id":"996f43b7-01d8-416a-bc83-ad8ebde2048a","type":"GlyphRenderer"},{"attributes":{},"id":"27f94501-5577-4efd-894f-6969f0a68e47","type":"ResetTool"},{"attributes":{},"id":"c8f73667-188f-4770-bde6-ea7c9e936571","type":"HelpTool"},{"attributes":{"source":{"id":"2e1dc4b4-aaa2-4b1b-a0d1-84c530e410e0","type":"ColumnDataSource"}},"id":"f1da75b5-071f-48fa-9971-bafc2dbb8a5f","type":"CDSView"},{"attributes":{},"id":"6c86826f-5204-468d-b1e0-329be824c9ad","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7dd56992-7442-436d-abde-2b9dca973540","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3b993d4-7714-4058-9e88-5dc8ee4abc87","type":"BasicTicker"}},"id":"18ae6e73-e836-48e9-b559-4fec39686346","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"36048059-bd7c-4210-878c-9449cd0c8463","type":"PanTool"},{"id":"72484fc1-55fc-4ec6-95c7-bee44259e722","type":"WheelZoomTool"},{"id":"9eb89aae-2f61-4bea-af13-0dcb86562f3c","type":"BoxZoomTool"},{"id":"9128a0bf-fad3-4c5f-af9a-cb520ae9fbb5","type":"SaveTool"},{"id":"3a701a53-a99d-4287-8dc1-25e54704736e","type":"ResetTool"},{"id":"cd9f3337-3382-4f70-899d-272a45f5a1f9","type":"HelpTool"}]},"id":"a560e187-1ddb-409b-b633-ec01bd1e62ea","type":"Toolbar"},{"attributes":{"overlay":{"id":"732fd838-a60e-4715-938c-6d2aa54f706f","type":"BoxAnnotation"}},"id":"9eb89aae-2f61-4bea-af13-0dcb86562f3c","type":"BoxZoomTool"},{"attributes":{},"id":"b9a61813-4152-4d29-b2c2-1d06284a1f59","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bf401f6-37fd-4b8f-a956-08f20c5d94f7","type":"Triangle"},{"attributes":{},"id":"36048059-bd7c-4210-878c-9449cd0c8463","type":"PanTool"},{"attributes":{},"id":"851e6fd9-5afa-441a-8462-1277acde811a","type":"BasicTicker"},{"attributes":{"plot":{"id":"306eed39-4ae8-4a54-8b65-621c215309da","subtype":"Figure","type":"Plot"},"ticker":{"id":"617ea8dd-f3c0-40cf-8d30-38bcd547f50e","type":"BasicTicker"}},"id":"87852551-eb40-4328-925a-4ee93009f30b","type":"Grid"},{"attributes":{},"id":"ab1d9f13-e921-4288-8d3e-c9b5598653c9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5cef73dc-f84a-4d9f-8b3d-2f9c25394862","type":"DataRange1d"},{"attributes":{},"id":"9128a0bf-fad3-4c5f-af9a-cb520ae9fbb5","type":"SaveTool"},{"attributes":{"formatter":{"id":"3b6a9b60-47b7-45c1-ba86-5129ae01544b","type":"BasicTickFormatter"},"plot":{"id":"7dd56992-7442-436d-abde-2b9dca973540","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3b993d4-7714-4058-9e88-5dc8ee4abc87","type":"BasicTicker"}},"id":"e4b12bbc-ff5f-491c-8e82-5e9a1a82eb2a","type":"LinearAxis"},{"attributes":{"source":{"id":"d977085e-3301-4f1a-afdb-70bf3ff46446","type":"ColumnDataSource"}},"id":"5a7757e7-7087-49fe-976f-36aef26c6934","type":"CDSView"},{"attributes":{"formatter":{"id":"dffcd80a-be59-4e98-8e43-9246e288c494","type":"BasicTickFormatter"},"plot":{"id":"226aa90f-14d9-40aa-a1ad-5d246b9ff8d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"eede7060-89ea-4b92-a362-990c688ad30e","type":"BasicTicker"}},"id":"a34825a2-32e0-4d83-bc75-0dcf797d5642","type":"LinearAxis"},{"attributes":{},"id":"b375d10e-aa8c-42a4-9837-e4498971e82a","type":"LinearScale"},{"attributes":{},"id":"617ea8dd-f3c0-40cf-8d30-38bcd547f50e","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f0fac491-8ee4-407f-b783-f1c1b800a1c0","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ef7486f-0928-4aa8-a8ff-4a0772ab92ad","type":"Circle"},{"attributes":{},"id":"7313755a-6fc8-4a4d-bfa4-0c686509e6ee","type":"WheelZoomTool"},{"attributes":{},"id":"fdebc5a9-8cb9-40e4-8c8d-d96e4ada5b04","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9b67eb2b-26f1-4165-824a-29b8d2185dc1","type":"PanTool"},{"id":"7313755a-6fc8-4a4d-bfa4-0c686509e6ee","type":"WheelZoomTool"},{"id":"e17763eb-fd0e-4634-946c-f29371f2615e","type":"BoxZoomTool"},{"id":"b31a5013-50ea-481d-b169-e2d3353b590f","type":"SaveTool"},{"id":"67e7a2e1-b052-4579-a3ad-1b44f5c274fc","type":"ResetTool"},{"id":"87d49c97-72dd-4807-b566-ac01ff5e18da","type":"HelpTool"}]},"id":"e7114a36-c39e-401d-aa02-677639d94542","type":"Toolbar"},{"attributes":{"data_source":{"id":"9b51585d-c663-40de-86ca-86ffbabdc0c3","type":"ColumnDataSource"},"glyph":{"id":"6bf401f6-37fd-4b8f-a956-08f20c5d94f7","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1ada754-a8d8-4a99-bcc1-965175f6a232","type":"Triangle"},"selection_glyph":null,"view":{"id":"84785e46-e79a-4eed-bd5a-03bcbfd8d7ab","type":"CDSView"}},"id":"1df81487-dada-4cc4-bb42-0f72eeafcbb9","type":"GlyphRenderer"},{"attributes":{},"id":"3a701a53-a99d-4287-8dc1-25e54704736e","type":"ResetTool"},{"attributes":{},"id":"465e60b3-b51c-404a-a002-97e033661ee4","type":"BasicTickFormatter"},{"attributes":{},"id":"87d49c97-72dd-4807-b566-ac01ff5e18da","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1ada754-a8d8-4a99-bcc1-965175f6a232","type":"Triangle"},{"attributes":{},"id":"eede7060-89ea-4b92-a362-990c688ad30e","type":"BasicTicker"},{"attributes":{},"id":"81746030-bee2-40b4-8afd-04ff1bea7846","type":"BasicTicker"},{"attributes":{},"id":"3b6a9b60-47b7-45c1-ba86-5129ae01544b","type":"BasicTickFormatter"},{"attributes":{},"id":"e4a2acb0-2b97-4de2-b8b4-8d2d89901d00","type":"LinearScale"},{"attributes":{"formatter":{"id":"ab1d9f13-e921-4288-8d3e-c9b5598653c9","type":"BasicTickFormatter"},"plot":{"id":"226aa90f-14d9-40aa-a1ad-5d246b9ff8d7","subtype":"Figure","type":"Plot"},"ticker":{"id":"dccb1710-1193-4652-83b8-08b344a0ead1","type":"BasicTicker"}},"id":"56d7e4b2-0df5-44ca-a878-6aaa810a552c","type":"LinearAxis"},{"attributes":{},"id":"f3b993d4-7714-4058-9e88-5dc8ee4abc87","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"2e1dc4b4-aaa2-4b1b-a0d1-84c530e410e0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"d977085e-3301-4f1a-afdb-70bf3ff46446","type":"ColumnDataSource"},"glyph":{"id":"8ef7486f-0928-4aa8-a8ff-4a0772ab92ad","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3668d1ca-4258-4c26-8225-1c57da83622f","type":"Circle"},"selection_glyph":null,"view":{"id":"5a7757e7-7087-49fe-976f-36aef26c6934","type":"CDSView"}},"id":"6d123ee4-78fc-414b-a462-4a3cbfea731e","type":"GlyphRenderer"},{"attributes":{"source":{"id":"9b51585d-c663-40de-86ca-86ffbabdc0c3","type":"ColumnDataSource"}},"id":"84785e46-e79a-4eed-bd5a-03bcbfd8d7ab","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d55b10f-2717-4024-94b9-d42386341d39","type":"Square"},{"attributes":{"overlay":{"id":"c1c5fa16-50fe-4599-aa27-e03b8037cf26","type":"BoxAnnotation"}},"id":"e17763eb-fd0e-4634-946c-f29371f2615e","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"87642136-1053-476c-8c3d-e4fabd91e995","type":"Square"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"732fd838-a60e-4715-938c-6d2aa54f706f","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"465e60b3-b51c-404a-a002-97e033661ee4","type":"BasicTickFormatter"},"plot":{"id":"7dd56992-7442-436d-abde-2b9dca973540","subtype":"Figure","type":"Plot"},"ticker":{"id":"81746030-bee2-40b4-8afd-04ff1bea7846","type":"BasicTicker"}},"id":"8bc344e9-57d1-4ec6-b684-f88fe0fdbdab","type":"LinearAxis"},{"attributes":{},"id":"6a9eb0eb-4907-427a-bd36-1aa35428cb08","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6a9eb0eb-4907-427a-bd36-1aa35428cb08","type":"BasicTickFormatter"},"plot":{"id":"306eed39-4ae8-4a54-8b65-621c215309da","subtype":"Figure","type":"Plot"},"ticker":{"id":"851e6fd9-5afa-441a-8462-1277acde811a","type":"BasicTicker"}},"id":"c1a97b2b-6f6a-4a07-a280-833c3aec7625","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"7dd56992-7442-436d-abde-2b9dca973540","subtype":"Figure","type":"Plot"},"ticker":{"id":"81746030-bee2-40b4-8afd-04ff1bea7846","type":"BasicTicker"}},"id":"ebff058d-69d2-4241-a3d8-cff95b873bcf","type":"Grid"},{"attributes":{},"id":"c7a56e44-d059-4539-bd6b-0a89ba21d525","type":"LinearScale"},{"attributes":{},"id":"0dd89007-c611-4b65-8ae4-61d0de494c63","type":"PanTool"}],"root_ids":["a443d719-ce30-4ea5-98ef-b237d542fb43"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"336619cf-731d-40b2-a6f7-c2dc82c6fd0a","elementid":"089c4de0-9d5c-4901-8da6-04eb53ba7930","modelid":"a443d719-ce30-4ea5-98ef-b237d542fb43"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
