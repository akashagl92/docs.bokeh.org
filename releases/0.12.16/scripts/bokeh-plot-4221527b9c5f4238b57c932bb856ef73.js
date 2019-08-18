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
      };var element = document.getElementById("69a73861-766a-4775-bea9-445075109f9a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69a73861-766a-4775-bea9-445075109f9a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.16.min.js"];
    
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
                    
                  var docs_json = '{"57b3a598-2915-4785-9cd7-2514e4c95282":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"c2822535-8c79-4ea2-88a0-98437dff34d1","type":"VBar"},{"attributes":{},"id":"0353434d-3e88-4976-a2b2-fb6228d87725","type":"BasicTickFormatter"},{"attributes":{},"id":"cd54520a-b40d-4133-9a72-0b647d79d6c9","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"7c75332b-1961-4d5e-836c-db0cd3b851f3","type":"ColumnDataSource"},"glyph":{"id":"c2822535-8c79-4ea2-88a0-98437dff34d1","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22ffbd71-de2e-422d-892f-864331670843","type":"VBar"},"selection_glyph":null,"view":{"id":"78d11988-e87d-4c76-a157-1c4300b464f2","type":"CDSView"}},"id":"e263e5c7-0e75-4941-84be-87b17e4bfe28","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"a69a5013-e202-424f-bacd-5c125b31f5f5","type":"FactorRange"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"22ffbd71-de2e-422d-892f-864331670843","type":"VBar"},{"attributes":{"source":{"id":"7c75332b-1961-4d5e-836c-db0cd3b851f3","type":"ColumnDataSource"}},"id":"78d11988-e87d-4c76-a157-1c4300b464f2","type":"CDSView"},{"attributes":{},"id":"4bd291f6-9055-4624-9528-b1d02ca3644a","type":"BasicTicker"},{"attributes":{},"id":"65010554-6530-4566-a791-41f918e26e5a","type":"CategoricalTicker"},{"attributes":{},"id":"93217264-03b2-4b6f-b30e-6d903e288a3d","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"5e132276-a7b6-4b0d-aa32-2fa60eae295a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bd291f6-9055-4624-9528-b1d02ca3644a","type":"BasicTicker"}},"id":"ec55a7e7-fc81-4f7e-89d6-6e0ad8220e8c","type":"Grid"},{"attributes":{"formatter":{"id":"cd54520a-b40d-4133-9a72-0b647d79d6c9","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"5e132276-a7b6-4b0d-aa32-2fa60eae295a","subtype":"Figure","type":"Plot"},"ticker":{"id":"65010554-6530-4566-a791-41f918e26e5a","type":"CategoricalTicker"}},"id":"1f61fbca-98cc-416b-a868-edc836c61a6d","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"5e132276-a7b6-4b0d-aa32-2fa60eae295a","subtype":"Figure","type":"Plot"},"ticker":{"id":"65010554-6530-4566-a791-41f918e26e5a","type":"CategoricalTicker"}},"id":"515271c0-659c-476d-b57f-71a089ea0d04","type":"Grid"},{"attributes":{"formatter":{"id":"0353434d-3e88-4976-a2b2-fb6228d87725","type":"BasicTickFormatter"},"plot":{"id":"5e132276-a7b6-4b0d-aa32-2fa60eae295a","subtype":"Figure","type":"Plot"},"ticker":{"id":"4bd291f6-9055-4624-9528-b1d02ca3644a","type":"BasicTicker"}},"id":"1805e192-f14e-4993-b0cc-c00048d2a9a2","type":"LinearAxis"},{"attributes":{},"id":"94e50c26-d952-4788-af4f-2e02ee6e368d","type":"Selection"},{"attributes":{},"id":"42a2e090-e60c-4ee3-97b2-a861d99769b5","type":"CategoricalScale"},{"attributes":{},"id":"06b41f29-df6c-426a-8cef-002a9655dd74","type":"LinearScale"},{"attributes":{"callback":null,"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]},"selected":{"id":"94e50c26-d952-4788-af4f-2e02ee6e368d","type":"Selection"},"selection_policy":{"id":"93217264-03b2-4b6f-b30e-6d903e288a3d","type":"UnionRenderers"}},"id":"7c75332b-1961-4d5e-836c-db0cd3b851f3","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"ba88819c-0755-45b2-b4af-351af30d4f94","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7b315b6d-c6d9-4310-befb-f0ff9aab8634","type":"Toolbar"},{"attributes":{"below":[{"id":"1f61fbca-98cc-416b-a868-edc836c61a6d","type":"CategoricalAxis"}],"left":[{"id":"1805e192-f14e-4993-b0cc-c00048d2a9a2","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"1f61fbca-98cc-416b-a868-edc836c61a6d","type":"CategoricalAxis"},{"id":"515271c0-659c-476d-b57f-71a089ea0d04","type":"Grid"},{"id":"1805e192-f14e-4993-b0cc-c00048d2a9a2","type":"LinearAxis"},{"id":"ec55a7e7-fc81-4f7e-89d6-6e0ad8220e8c","type":"Grid"},{"id":"e263e5c7-0e75-4941-84be-87b17e4bfe28","type":"GlyphRenderer"}],"title":{"id":"ba88819c-0755-45b2-b4af-351af30d4f94","type":"Title"},"toolbar":{"id":"7b315b6d-c6d9-4310-befb-f0ff9aab8634","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"a69a5013-e202-424f-bacd-5c125b31f5f5","type":"FactorRange"},"x_scale":{"id":"42a2e090-e60c-4ee3-97b2-a861d99769b5","type":"CategoricalScale"},"y_range":{"id":"9f63d90d-d272-4b88-87ba-0d536c5eee83","type":"DataRange1d"},"y_scale":{"id":"06b41f29-df6c-426a-8cef-002a9655dd74","type":"LinearScale"}},"id":"5e132276-a7b6-4b0d-aa32-2fa60eae295a","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"start":0},"id":"9f63d90d-d272-4b88-87ba-0d536c5eee83","type":"DataRange1d"}],"root_ids":["5e132276-a7b6-4b0d-aa32-2fa60eae295a"]},"title":"Bokeh Application","version":"0.12.16"}}';
                  var render_items = [{"docid":"57b3a598-2915-4785-9cd7-2514e4c95282","elementid":"69a73861-766a-4775-bea9-445075109f9a","modelid":"5e132276-a7b6-4b0d-aa32-2fa60eae295a"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.16.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.16.min.css");
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