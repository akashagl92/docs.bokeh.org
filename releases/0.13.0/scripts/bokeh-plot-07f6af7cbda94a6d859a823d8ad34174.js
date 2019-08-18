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
      };var element = document.getElementById("7094681d-7bc4-4acb-912a-3421efce8d51");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7094681d-7bc4-4acb-912a-3421efce8d51' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"aa49056a-ac87-428c-b988-e09d8e3568bb":{"roots":{"references":[{"attributes":{},"id":"dc8df9ed-aec0-4516-bbd3-13623e57f0a2","type":"HelpTool"},{"attributes":{},"id":"ed5f696f-b440-4880-b3bb-a4c88e5a4b02","type":"LinearScale"},{"attributes":{"dimension":"lon"},"id":"fd872964-c572-45ed-9ce9-8c84c0cd974c","type":"MercatorTickFormatter"},{"attributes":{"callback":null},"id":"36513d46-5ce7-438a-8ea5-0ce421ca3329","type":"Range1d"},{"attributes":{},"id":"542be7b9-0a57-4590-a035-083220bf9b27","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"0f7b951c-6491-4cad-87a9-b39f26c62c6e","type":"PanTool"},{"id":"fa3b3e13-2b2f-4379-91fc-a224bac6329a","type":"WheelZoomTool"},{"id":"f8ada661-fc55-44f0-b68a-7dba67333bc8","type":"ResetTool"},{"id":"dc8df9ed-aec0-4516-bbd3-13623e57f0a2","type":"HelpTool"}]},"id":"ba0d18b4-8ae5-4b6d-a022-089405014746","type":"Toolbar"},{"attributes":{"formatter":{"id":"c1c1291f-12d0-4bb7-b34d-7195083d877a","type":"MercatorTickFormatter"},"plot":{"id":"502ce4fc-99ff-4bf9-bbb8-491e74f6e897","subtype":"GMap","type":"GMapPlot"},"ticker":{"id":"2246674a-d8ee-4c90-89d1-1d12c4284acc","type":"MercatorTicker"}},"id":"bfcb1ac4-ea7c-489d-a842-5c4367e8b8ad","type":"LinearAxis"},{"attributes":{},"id":"90862e49-f41e-48a2-964a-a5b3da277edc","type":"Selection"},{"attributes":{"formatter":{"id":"fd872964-c572-45ed-9ce9-8c84c0cd974c","type":"MercatorTickFormatter"},"plot":{"id":"502ce4fc-99ff-4bf9-bbb8-491e74f6e897","subtype":"GMap","type":"GMapPlot"},"ticker":{"id":"e7afca0f-dfa4-476b-8270-159066ca4c75","type":"MercatorTicker"}},"id":"f0a4d8a7-5a18-44c2-906c-a2412d507628","type":"LinearAxis"},{"attributes":{"source":{"id":"839e66c8-be43-4eda-ba12-843a8b77dc92","type":"ColumnDataSource"}},"id":"b35b622b-87a7-4049-a857-392472eac34c","type":"CDSView"},{"attributes":{"dimension":"lon"},"id":"e7afca0f-dfa4-476b-8270-159066ca4c75","type":"MercatorTicker"},{"attributes":{},"id":"40494472-35bf-4cb7-9ddb-f0af8f29d172","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"blue"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"fe26dec0-5da9-4bc7-b73d-6e5cdd0b1e31","type":"Circle"},{"attributes":{"data_source":{"id":"839e66c8-be43-4eda-ba12-843a8b77dc92","type":"ColumnDataSource"},"glyph":{"id":"fe26dec0-5da9-4bc7-b73d-6e5cdd0b1e31","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17d46b9b-6e10-4552-965a-2f863bcbba63","type":"Circle"},"selection_glyph":null,"view":{"id":"b35b622b-87a7-4049-a857-392472eac34c","type":"CDSView"}},"id":"23d33959-044b-4ecc-8908-4d0fb7db224d","type":"GlyphRenderer"},{"attributes":{"dimension":"lat"},"id":"2246674a-d8ee-4c90-89d1-1d12c4284acc","type":"MercatorTicker"},{"attributes":{"lat":30.2861,"lng":-97.7394,"zoom":11},"id":"c4eae93b-395f-4f75-a52d-36ff2654150a","type":"GMapOptions"},{"attributes":{"api_key":"AIzaSyAM1OHVm6Yr_i54Kt01mylfxyNxQdxmxHQ","below":[{"id":"f0a4d8a7-5a18-44c2-906c-a2412d507628","type":"LinearAxis"}],"left":[{"id":"bfcb1ac4-ea7c-489d-a842-5c4367e8b8ad","type":"LinearAxis"}],"map_options":{"id":"c4eae93b-395f-4f75-a52d-36ff2654150a","type":"GMapOptions"},"renderers":[{"id":"f0a4d8a7-5a18-44c2-906c-a2412d507628","type":"LinearAxis"},{"id":"bfcb1ac4-ea7c-489d-a842-5c4367e8b8ad","type":"LinearAxis"},{"id":"23d33959-044b-4ecc-8908-4d0fb7db224d","type":"GlyphRenderer"}],"title":{"id":"1c40f5f2-7299-4b4d-b624-60601c9c4872","type":"Title"},"toolbar":{"id":"ba0d18b4-8ae5-4b6d-a022-089405014746","type":"Toolbar"},"x_range":{"id":"20e77dd0-dcb9-4fe6-a021-0e9376a5bc39","type":"Range1d"},"x_scale":{"id":"ed5f696f-b440-4880-b3bb-a4c88e5a4b02","type":"LinearScale"},"y_range":{"id":"36513d46-5ce7-438a-8ea5-0ce421ca3329","type":"Range1d"},"y_scale":{"id":"542be7b9-0a57-4590-a035-083220bf9b27","type":"LinearScale"}},"id":"502ce4fc-99ff-4bf9-bbb8-491e74f6e897","subtype":"GMap","type":"GMapPlot"},{"attributes":{"dimension":"lat"},"id":"c1c1291f-12d0-4bb7-b34d-7195083d877a","type":"MercatorTickFormatter"},{"attributes":{},"id":"0f7b951c-6491-4cad-87a9-b39f26c62c6e","type":"PanTool"},{"attributes":{"plot":null,"text":"Austin"},"id":"1c40f5f2-7299-4b4d-b624-60601c9c4872","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":15},"x":{"field":"lon"},"y":{"field":"lat"}},"id":"17d46b9b-6e10-4552-965a-2f863bcbba63","type":"Circle"},{"attributes":{"callback":null},"id":"20e77dd0-dcb9-4fe6-a021-0e9376a5bc39","type":"Range1d"},{"attributes":{},"id":"fa3b3e13-2b2f-4379-91fc-a224bac6329a","type":"WheelZoomTool"},{"attributes":{},"id":"f8ada661-fc55-44f0-b68a-7dba67333bc8","type":"ResetTool"},{"attributes":{"callback":null,"data":{"lat":[30.29,30.2,30.29],"lon":[-97.7,-97.74,-97.78]},"selected":{"id":"90862e49-f41e-48a2-964a-a5b3da277edc","type":"Selection"},"selection_policy":{"id":"40494472-35bf-4cb7-9ddb-f0af8f29d172","type":"UnionRenderers"}},"id":"839e66c8-be43-4eda-ba12-843a8b77dc92","type":"ColumnDataSource"}],"root_ids":["502ce4fc-99ff-4bf9-bbb8-491e74f6e897"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"aa49056a-ac87-428c-b988-e09d8e3568bb","roots":{"502ce4fc-99ff-4bf9-bbb8-491e74f6e897":"7094681d-7bc4-4acb-912a-3421efce8d51"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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