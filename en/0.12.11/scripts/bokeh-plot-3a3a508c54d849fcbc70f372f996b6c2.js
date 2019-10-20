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
      };var element = document.getElementById("85d2f61f-e923-4565-b575-a273bad31802");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85d2f61f-e923-4565-b575-a273bad31802' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.11.min.js"];
    
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
                    var docs_json = '{"b5f30d87-47aa-457a-b9c8-ea03a750856d":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"8834d9f8-19c4-423d-ae56-786490783c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"237f6bd0-5823-4b27-b907-9db95242ccd7","type":"BasicTicker"}},"id":"578d9f4d-25f3-4890-a6a7-0bfb1fd242a4","type":"Grid"},{"attributes":{"formatter":{"id":"eb0d9d36-742f-49b7-ae8d-0a397c9b4836","type":"BasicTickFormatter"},"plot":{"id":"8834d9f8-19c4-423d-ae56-786490783c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"237f6bd0-5823-4b27-b907-9db95242ccd7","type":"BasicTicker"}},"id":"2f3131a0-d1de-45a0-80df-a058bc48c3d0","type":"LinearAxis"},{"attributes":{},"id":"237f6bd0-5823-4b27-b907-9db95242ccd7","type":"BasicTicker"},{"attributes":{"plot":{"id":"8834d9f8-19c4-423d-ae56-786490783c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"84c198a9-3c47-4cfb-834c-fb3d8a455ee8","type":"BasicTicker"}},"id":"df6ca2fc-f6a9-4da7-937a-03fed76f9b2e","type":"Grid"},{"attributes":{"callback":null},"id":"581a02fd-770d-4749-8b2c-d41bec0403d8","type":"DataRange1d"},{"attributes":{},"id":"53edbf74-c668-46e3-b847-0f30a336631e","type":"LinearScale"},{"attributes":{"data_source":{"id":"46c538a3-c2fc-4587-b022-6db01b47c686","type":"ColumnDataSource"},"glyph":{"id":"a534817c-8da0-4cae-9b1d-f4110a15ae96","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6c6a4f79-98a9-4426-885a-86ce869a33a7","type":"Circle"},"selection_glyph":null,"view":{"id":"1dd13184-12ff-4b78-8a2f-fd9896bae94c","type":"CDSView"}},"id":"0d8178ea-aa3c-430e-b31e-5abfdf5e5138","type":"GlyphRenderer"},{"attributes":{},"id":"9d89a5aa-82db-414b-88dc-2b6e8f0ca34e","type":"LinearScale"},{"attributes":{},"id":"4105f878-dd38-4007-a114-5b9007f6c74d","type":"PanTool"},{"attributes":{},"id":"eb0d9d36-742f-49b7-ae8d-0a397c9b4836","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"46c538a3-c2fc-4587-b022-6db01b47c686","type":"ColumnDataSource"}},"id":"1dd13184-12ff-4b78-8a2f-fd9896bae94c","type":"CDSView"},{"attributes":{"formatter":{"id":"33245543-f1a8-4806-8b32-8f3eda9729a1","type":"BasicTickFormatter"},"plot":{"id":"8834d9f8-19c4-423d-ae56-786490783c80","subtype":"Figure","type":"Plot"},"ticker":{"id":"84c198a9-3c47-4cfb-834c-fb3d8a455ee8","type":"BasicTicker"}},"id":"5ae9aec0-b2aa-4396-84c1-b5819b33fc42","type":"LinearAxis"},{"attributes":{},"id":"3418fae6-de8d-407f-b89a-a09a6fab1212","type":"ResetTool"},{"attributes":{},"id":"84c198a9-3c47-4cfb-834c-fb3d8a455ee8","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"a534817c-8da0-4cae-9b1d-f4110a15ae96","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"46c538a3-c2fc-4587-b022-6db01b47c686","type":"ColumnDataSource"},{"attributes":{},"id":"771e6ec7-e3df-43a9-8a65-495a963c2698","type":"SaveTool"},{"attributes":{},"id":"33245543-f1a8-4806-8b32-8f3eda9729a1","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c6a4f79-98a9-4426-885a-86ce869a33a7","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"7dd05c5b-c9c9-435b-8843-fe8db13f9d48","type":"Title"},{"attributes":{"below":[{"id":"5ae9aec0-b2aa-4396-84c1-b5819b33fc42","type":"LinearAxis"}],"left":[{"id":"2f3131a0-d1de-45a0-80df-a058bc48c3d0","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5ae9aec0-b2aa-4396-84c1-b5819b33fc42","type":"LinearAxis"},{"id":"df6ca2fc-f6a9-4da7-937a-03fed76f9b2e","type":"Grid"},{"id":"2f3131a0-d1de-45a0-80df-a058bc48c3d0","type":"LinearAxis"},{"id":"578d9f4d-25f3-4890-a6a7-0bfb1fd242a4","type":"Grid"},{"id":"0d8178ea-aa3c-430e-b31e-5abfdf5e5138","type":"GlyphRenderer"}],"title":{"id":"7dd05c5b-c9c9-435b-8843-fe8db13f9d48","type":"Title"},"toolbar":{"id":"be96f01d-2ff7-4f82-9d2b-e925cc70a5b6","type":"Toolbar"},"x_range":{"id":"41585bf7-a7b9-48ce-b79b-e74a6421b1a6","type":"DataRange1d"},"x_scale":{"id":"53edbf74-c668-46e3-b847-0f30a336631e","type":"LinearScale"},"y_range":{"id":"581a02fd-770d-4749-8b2c-d41bec0403d8","type":"DataRange1d"},"y_scale":{"id":"9d89a5aa-82db-414b-88dc-2b6e8f0ca34e","type":"LinearScale"}},"id":"8834d9f8-19c4-423d-ae56-786490783c80","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4105f878-dd38-4007-a114-5b9007f6c74d","type":"PanTool"},{"id":"3418fae6-de8d-407f-b89a-a09a6fab1212","type":"ResetTool"},{"id":"771e6ec7-e3df-43a9-8a65-495a963c2698","type":"SaveTool"}]},"id":"be96f01d-2ff7-4f82-9d2b-e925cc70a5b6","type":"Toolbar"},{"attributes":{"callback":null},"id":"41585bf7-a7b9-48ce-b79b-e74a6421b1a6","type":"DataRange1d"}],"root_ids":["8834d9f8-19c4-423d-ae56-786490783c80"]},"title":"Bokeh Application","version":"0.12.11"}}';
                    var render_items = [{"docid":"b5f30d87-47aa-457a-b9c8-ea03a750856d","elementid":"85d2f61f-e923-4565-b575-a273bad31802","modelid":"8834d9f8-19c4-423d-ae56-786490783c80"}];
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.11.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.11.min.css");
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