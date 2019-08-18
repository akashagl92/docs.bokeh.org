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
      };var element = document.getElementById("1481a789-837c-4675-bfe0-acd330f1dab4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1481a789-837c-4675-bfe0-acd330f1dab4' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"cc8ff948-dbe0-4460-92e1-91958439ead0":{"roots":{"references":[{"attributes":{"callback":null},"id":"211c8e0e-b40a-4938-89c8-a6bc55f38af8","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"14d82ebc-c390-4e85-b556-e736f2973797","type":"Title"},{"attributes":{},"id":"7c924c33-e849-4eee-b038-d4769994e783","type":"LinearScale"},{"attributes":{},"id":"b3089970-9f11-4bbf-a282-124465842dd9","type":"Selection"},{"attributes":{},"id":"0bdc114f-57ff-4a90-970f-5b1e62645b76","type":"LinearScale"},{"attributes":{},"id":"8ddb23b3-9e04-44eb-b4d5-05b7af7e55a0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f7c40172-f89c-4441-84e7-39867773aba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d54f1247-899d-4866-89ab-c26486837012","type":"BasicTicker"}},"id":"7c7ff980-0ad4-436e-aa79-c0b95818ec7a","type":"Grid"},{"attributes":{},"id":"7fe968b6-a98c-403f-872a-e3ec5686e2a7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7fe968b6-a98c-403f-872a-e3ec5686e2a7","type":"BasicTickFormatter"},"plot":{"id":"f7c40172-f89c-4441-84e7-39867773aba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc432ec3-6c22-40d9-89a4-e2c0d5c873b7","type":"BasicTicker"}},"id":"cafa4189-d18e-4010-8908-8e33e6e5fc9a","type":"LinearAxis"},{"attributes":{},"id":"bc432ec3-6c22-40d9-89a4-e2c0d5c873b7","type":"BasicTicker"},{"attributes":{},"id":"a93802e7-3181-4539-a071-c1f567c005f9","type":"UnionRenderers"},{"attributes":{},"id":"4690649f-e520-406b-ac2d-6ec475621adb","type":"ResetTool"},{"attributes":{},"id":"61a4ed41-6ce0-44a3-a2b2-924d624ebfa9","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"f7c40172-f89c-4441-84e7-39867773aba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"bc432ec3-6c22-40d9-89a4-e2c0d5c873b7","type":"BasicTicker"}},"id":"dff2c56c-e26d-4685-bc60-f0837fd2ebdc","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"8de5d401-ada1-4f78-b27e-99ca5a26da52","type":"Patch"},{"attributes":{"data_source":{"id":"8eab7c9b-c73e-425d-9483-5d010ab7f035","type":"ColumnDataSource"},"glyph":{"id":"2cfe6024-0d0d-42bf-ae39-0896d150ffd1","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8de5d401-ada1-4f78-b27e-99ca5a26da52","type":"Patch"},"selection_glyph":null,"view":{"id":"0e896060-8f1a-4cde-b5f5-67895ae73b0f","type":"CDSView"}},"id":"e8159b2f-b65b-4c89-9c0b-eecd9b250ce7","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":[1,2,3,2],"y":[6,7,2,2]},"selected":{"id":"b3089970-9f11-4bbf-a282-124465842dd9","type":"Selection"},"selection_policy":{"id":"a93802e7-3181-4539-a071-c1f567c005f9","type":"UnionRenderers"}},"id":"8eab7c9b-c73e-425d-9483-5d010ab7f035","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8eab7c9b-c73e-425d-9483-5d010ab7f035","type":"ColumnDataSource"}},"id":"0e896060-8f1a-4cde-b5f5-67895ae73b0f","type":"CDSView"},{"attributes":{"below":[{"id":"c502c2a0-8335-4f93-9467-3923a7f5c808","type":"LinearAxis"}],"left":[{"id":"cafa4189-d18e-4010-8908-8e33e6e5fc9a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c502c2a0-8335-4f93-9467-3923a7f5c808","type":"LinearAxis"},{"id":"7c7ff980-0ad4-436e-aa79-c0b95818ec7a","type":"Grid"},{"id":"cafa4189-d18e-4010-8908-8e33e6e5fc9a","type":"LinearAxis"},{"id":"dff2c56c-e26d-4685-bc60-f0837fd2ebdc","type":"Grid"},{"id":"b5c539c2-e5ff-4402-a839-f62ba8b0671f","type":"BoxAnnotation"},{"id":"e8159b2f-b65b-4c89-9c0b-eecd9b250ce7","type":"GlyphRenderer"}],"title":{"id":"14d82ebc-c390-4e85-b556-e736f2973797","type":"Title"},"toolbar":{"id":"a92e173f-7a4a-4b6a-9639-e92c91e57b2c","type":"Toolbar"},"x_range":{"id":"28593647-bb05-46c2-97d7-13abafdd0083","type":"DataRange1d"},"x_scale":{"id":"7c924c33-e849-4eee-b038-d4769994e783","type":"LinearScale"},"y_range":{"id":"211c8e0e-b40a-4938-89c8-a6bc55f38af8","type":"DataRange1d"},"y_scale":{"id":"0bdc114f-57ff-4a90-970f-5b1e62645b76","type":"LinearScale"}},"id":"f7c40172-f89c-4441-84e7-39867773aba0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d060e967-48a5-4132-8dfb-300794a0e9fe","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"d060e967-48a5-4132-8dfb-300794a0e9fe","type":"PanTool"},{"id":"6e538c78-14d2-4c5c-9cbd-7c81f484c3b4","type":"WheelZoomTool"},{"id":"ff1614fb-131e-4bbd-822c-15869006cc04","type":"BoxZoomTool"},{"id":"2dd4d7f7-7495-4052-82b2-7da3e95aede2","type":"SaveTool"},{"id":"4690649f-e520-406b-ac2d-6ec475621adb","type":"ResetTool"},{"id":"61a4ed41-6ce0-44a3-a2b2-924d624ebfa9","type":"HelpTool"}]},"id":"a92e173f-7a4a-4b6a-9639-e92c91e57b2c","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b5c539c2-e5ff-4402-a839-f62ba8b0671f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"28593647-bb05-46c2-97d7-13abafdd0083","type":"DataRange1d"},{"attributes":{},"id":"6e538c78-14d2-4c5c-9cbd-7c81f484c3b4","type":"WheelZoomTool"},{"attributes":{},"id":"d54f1247-899d-4866-89ab-c26486837012","type":"BasicTicker"},{"attributes":{"overlay":{"id":"b5c539c2-e5ff-4402-a839-f62ba8b0671f","type":"BoxAnnotation"}},"id":"ff1614fb-131e-4bbd-822c-15869006cc04","type":"BoxZoomTool"},{"attributes":{"fill_color":"#99d8c9","line_color":"#99d8c9","x":{"field":"x"},"y":{"field":"y"}},"id":"2cfe6024-0d0d-42bf-ae39-0896d150ffd1","type":"Patch"},{"attributes":{},"id":"2dd4d7f7-7495-4052-82b2-7da3e95aede2","type":"SaveTool"},{"attributes":{"formatter":{"id":"8ddb23b3-9e04-44eb-b4d5-05b7af7e55a0","type":"BasicTickFormatter"},"plot":{"id":"f7c40172-f89c-4441-84e7-39867773aba0","subtype":"Figure","type":"Plot"},"ticker":{"id":"d54f1247-899d-4866-89ab-c26486837012","type":"BasicTicker"}},"id":"c502c2a0-8335-4f93-9467-3923a7f5c808","type":"LinearAxis"}],"root_ids":["f7c40172-f89c-4441-84e7-39867773aba0"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"cc8ff948-dbe0-4460-92e1-91958439ead0","roots":{"f7c40172-f89c-4441-84e7-39867773aba0":"1481a789-837c-4675-bfe0-acd330f1dab4"}}];
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