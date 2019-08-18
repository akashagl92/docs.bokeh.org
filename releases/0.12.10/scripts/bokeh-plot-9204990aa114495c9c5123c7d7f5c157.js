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
      };var element = document.getElementById("cb21e621-d610-4b86-9db2-0c14f1b9fae2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb21e621-d610-4b86-9db2-0c14f1b9fae2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"5413e835-e362-42f8-8d9f-fc58408d1c87":{"roots":{"references":[{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"5b15c00a-6e86-453c-813a-dbd59a323e42","type":"Title"},{"attributes":{"formatter":{"id":"82fc9563-3853-4024-ba9f-386cee600c16","type":"CategoricalTickFormatter"},"plot":{"id":"c63b60fb-fad0-45a2-b28c-c31db6314981","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e6a343c-9ec0-4117-8b48-5e8f6586624a","type":"CategoricalTicker"}},"id":"cb828d5c-6c7e-401f-8842-694eb3ca4ab8","type":"CategoricalAxis"},{"attributes":{},"id":"3e6a343c-9ec0-4117-8b48-5e8f6586624a","type":"CategoricalTicker"},{"attributes":{},"id":"a8cfc38b-2fce-48cf-b6cf-ae1af7800557","type":"CategoricalScale"},{"attributes":{},"id":"b03cb430-d686-4eba-b17f-1c2fce7d9840","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]}},"id":"79f14166-e771-46d7-bcdf-4d03848cad93","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"2b5249e2-1af8-4247-aa92-6440241966e9","type":"BasicTickFormatter"},"plot":{"id":"c63b60fb-fad0-45a2-b28c-c31db6314981","subtype":"Figure","type":"Plot"},"ticker":{"id":"b03cb430-d686-4eba-b17f-1c2fce7d9840","type":"BasicTicker"}},"id":"6581512a-3ca5-4438-bcbe-a4fdae9b329d","type":"LinearAxis"},{"attributes":{},"id":"2b5249e2-1af8-4247-aa92-6440241966e9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"79f14166-e771-46d7-bcdf-4d03848cad93","type":"ColumnDataSource"},"glyph":{"id":"cd0a7fc6-981f-4524-8391-e8d2e9f4cf66","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57f03bc7-a83d-4668-bfdc-2ade5165bc10","type":"VBar"},"selection_glyph":null,"view":{"id":"96261730-7b48-4571-be05-31495ddcc425","type":"CDSView"}},"id":"d04c8d73-56c5-4402-9533-5003dd6bd7fc","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"cd0a7fc6-981f-4524-8391-e8d2e9f4cf66","type":"VBar"},{"attributes":{"source":{"id":"79f14166-e771-46d7-bcdf-4d03848cad93","type":"ColumnDataSource"}},"id":"96261730-7b48-4571-be05-31495ddcc425","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"c63b60fb-fad0-45a2-b28c-c31db6314981","subtype":"Figure","type":"Plot"},"ticker":{"id":"b03cb430-d686-4eba-b17f-1c2fce7d9840","type":"BasicTicker"}},"id":"32d48ac2-2d8f-4a4e-9356-21e04c99c101","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"267e3165-ff3f-4305-8f3d-210d344ff282","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"c63b60fb-fad0-45a2-b28c-c31db6314981","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e6a343c-9ec0-4117-8b48-5e8f6586624a","type":"CategoricalTicker"}},"id":"f37c57d4-7069-4bba-ae69-e551985d29c2","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"57f03bc7-a83d-4668-bfdc-2ade5165bc10","type":"VBar"},{"attributes":{},"id":"7b41dfc8-5e03-4cea-8e3e-20e16882babb","type":"LinearScale"},{"attributes":{},"id":"82fc9563-3853-4024-ba9f-386cee600c16","type":"CategoricalTickFormatter"},{"attributes":{"below":[{"id":"cb828d5c-6c7e-401f-8842-694eb3ca4ab8","type":"CategoricalAxis"}],"left":[{"id":"6581512a-3ca5-4438-bcbe-a4fdae9b329d","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"cb828d5c-6c7e-401f-8842-694eb3ca4ab8","type":"CategoricalAxis"},{"id":"f37c57d4-7069-4bba-ae69-e551985d29c2","type":"Grid"},{"id":"6581512a-3ca5-4438-bcbe-a4fdae9b329d","type":"LinearAxis"},{"id":"32d48ac2-2d8f-4a4e-9356-21e04c99c101","type":"Grid"},{"id":"d04c8d73-56c5-4402-9533-5003dd6bd7fc","type":"GlyphRenderer"}],"title":{"id":"5b15c00a-6e86-453c-813a-dbd59a323e42","type":"Title"},"toolbar":{"id":"267e3165-ff3f-4305-8f3d-210d344ff282","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"8a6b4c49-2017-4b6c-823b-05c2786cad6c","type":"FactorRange"},"x_scale":{"id":"a8cfc38b-2fce-48cf-b6cf-ae1af7800557","type":"CategoricalScale"},"y_range":{"id":"df6fc0bc-290f-441f-99a4-a259c1c2a699","type":"DataRange1d"},"y_scale":{"id":"7b41dfc8-5e03-4cea-8e3e-20e16882babb","type":"LinearScale"}},"id":"c63b60fb-fad0-45a2-b28c-c31db6314981","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"8a6b4c49-2017-4b6c-823b-05c2786cad6c","type":"FactorRange"},{"attributes":{"callback":null,"start":0},"id":"df6fc0bc-290f-441f-99a4-a259c1c2a699","type":"DataRange1d"}],"root_ids":["c63b60fb-fad0-45a2-b28c-c31db6314981"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"5413e835-e362-42f8-8d9f-fc58408d1c87","elementid":"cb21e621-d610-4b86-9db2-0c14f1b9fae2","modelid":"c63b60fb-fad0-45a2-b28c-c31db6314981"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
