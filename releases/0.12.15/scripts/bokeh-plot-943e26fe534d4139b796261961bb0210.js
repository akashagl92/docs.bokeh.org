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
      };var element = document.getElementById("5b945ca7-caf3-4946-9de1-e325ebf108d7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '5b945ca7-caf3-4946-9de1-e325ebf108d7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"f8d4167a-5f48-4217-ad39-81f2c1b9f8f8":{"roots":{"references":[{"attributes":{},"id":"65707e2b-c004-4ad5-9fd7-f04e47704f61","type":"CategoricalScale"},{"attributes":{"below":[{"id":"f474d5ea-fa84-4bb4-b178-a1984b43f410","type":"CategoricalAxis"}],"left":[{"id":"3c5c468d-76f5-4129-811b-59dac1e264ab","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"f474d5ea-fa84-4bb4-b178-a1984b43f410","type":"CategoricalAxis"},{"id":"e442a68d-191f-4e97-b0f9-28fc386502b0","type":"Grid"},{"id":"3c5c468d-76f5-4129-811b-59dac1e264ab","type":"LinearAxis"},{"id":"8ea2ffb1-c300-4270-bfc5-87d98ad77a62","type":"Grid"},{"id":"78406757-789a-4fc9-a6fa-9db7a2940fcb","type":"GlyphRenderer"}],"title":{"id":"6bce191a-acd9-4013-854f-b57770b08f16","type":"Title"},"toolbar":{"id":"046c74ef-3a02-4e4e-8526-69d2b1e9bdc8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"00f64e0c-03d4-4a68-b911-46d164a60943","type":"FactorRange"},"x_scale":{"id":"65707e2b-c004-4ad5-9fd7-f04e47704f61","type":"CategoricalScale"},"y_range":{"id":"f68e6cd2-a733-4f1f-b5f8-fb4e7bf812d2","type":"DataRange1d"},"y_scale":{"id":"9bf01a44-3ef4-41ae-b078-8c0200d290b6","type":"LinearScale"}},"id":"8507cc29-fbb0-4c0a-83ee-296256066ecc","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"31e39163-309d-49a6-af17-282215a56323","type":"ColumnDataSource"}},"id":"729a2d8b-2dda-45af-b944-2081eba33368","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"selected":null,"selection_policy":null},"id":"31e39163-309d-49a6-af17-282215a56323","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"00f64e0c-03d4-4a68-b911-46d164a60943","type":"FactorRange"},{"attributes":{},"id":"cc923c53-18bc-4342-b8c3-fd6a2fa4a713","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"6bce191a-acd9-4013-854f-b57770b08f16","type":"Title"},{"attributes":{"callback":null,"start":0},"id":"f68e6cd2-a733-4f1f-b5f8-fb4e7bf812d2","type":"DataRange1d"},{"attributes":{},"id":"9bf01a44-3ef4-41ae-b078-8c0200d290b6","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"efa965fe-7f4a-424a-96d8-39125babed9f","type":"VBar"},{"attributes":{"formatter":{"id":"cc923c53-18bc-4342-b8c3-fd6a2fa4a713","type":"BasicTickFormatter"},"plot":{"id":"8507cc29-fbb0-4c0a-83ee-296256066ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"80253130-ccbd-4f51-aff4-377fe501d34d","type":"BasicTicker"}},"id":"3c5c468d-76f5-4129-811b-59dac1e264ab","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"66c43f1f-cf24-400d-8d72-93510ec20743","type":"VBar"},{"attributes":{"formatter":{"id":"afee9a6c-c2cb-4f60-b132-ef70d9a443ee","type":"CategoricalTickFormatter"},"plot":{"id":"8507cc29-fbb0-4c0a-83ee-296256066ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce4ba6ae-3ba7-43e4-abf1-2de941e49098","type":"CategoricalTicker"}},"id":"f474d5ea-fa84-4bb4-b178-a1984b43f410","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"31e39163-309d-49a6-af17-282215a56323","type":"ColumnDataSource"},"glyph":{"id":"efa965fe-7f4a-424a-96d8-39125babed9f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"66c43f1f-cf24-400d-8d72-93510ec20743","type":"VBar"},"selection_glyph":null,"view":{"id":"729a2d8b-2dda-45af-b944-2081eba33368","type":"CDSView"}},"id":"78406757-789a-4fc9-a6fa-9db7a2940fcb","type":"GlyphRenderer"},{"attributes":{},"id":"ce4ba6ae-3ba7-43e4-abf1-2de941e49098","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"046c74ef-3a02-4e4e-8526-69d2b1e9bdc8","type":"Toolbar"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"8507cc29-fbb0-4c0a-83ee-296256066ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce4ba6ae-3ba7-43e4-abf1-2de941e49098","type":"CategoricalTicker"}},"id":"e442a68d-191f-4e97-b0f9-28fc386502b0","type":"Grid"},{"attributes":{},"id":"80253130-ccbd-4f51-aff4-377fe501d34d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8507cc29-fbb0-4c0a-83ee-296256066ecc","subtype":"Figure","type":"Plot"},"ticker":{"id":"80253130-ccbd-4f51-aff4-377fe501d34d","type":"BasicTicker"}},"id":"8ea2ffb1-c300-4270-bfc5-87d98ad77a62","type":"Grid"},{"attributes":{},"id":"afee9a6c-c2cb-4f60-b132-ef70d9a443ee","type":"CategoricalTickFormatter"}],"root_ids":["8507cc29-fbb0-4c0a-83ee-296256066ecc"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"f8d4167a-5f48-4217-ad39-81f2c1b9f8f8","elementid":"5b945ca7-caf3-4946-9de1-e325ebf108d7","modelid":"8507cc29-fbb0-4c0a-83ee-296256066ecc"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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