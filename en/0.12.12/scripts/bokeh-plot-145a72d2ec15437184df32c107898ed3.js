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
      };var element = document.getElementById("f7e1b6ee-56e0-415f-ad3d-2f541d31d298");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7e1b6ee-56e0-415f-ad3d-2f541d31d298' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.12.min.js"];
    
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
                    
                  var docs_json = '{"592b41ab-03ba-418c-be4e-78c491168378":{"roots":{"references":[{"attributes":{},"id":"212e75af-dab1-4f64-b7ca-8b54c11c781d","type":"CategoricalTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"b8e11149-ba33-49b9-a72a-3ddcf4751f27","type":"VBar"},{"attributes":{},"id":"6147584d-9d25-4976-8ae7-d5085babb773","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6147584d-9d25-4976-8ae7-d5085babb773","type":"BasicTickFormatter"},"plot":{"id":"60a44451-e498-4a71-ae81-4db05a523543","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c3a3d90-75a2-43b9-bfb6-414381f66be2","type":"BasicTicker"}},"id":"7486253d-bb15-4c4c-a2f4-5a0e61af6bba","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"598e3494-010c-49fc-aa95-b81c35f2551d","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7a6a6fc7-a773-4647-b84d-dec3fc39fb53","type":"Toolbar"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"05dd5a4f-b7d5-4612-97dc-eab52840dff5","type":"FactorRange"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"f8e9eddc-a39d-4fee-837b-257fe1bb000f","type":"VBar"},{"attributes":{},"id":"39277559-1ae5-40e5-8ba4-755bd6b0db5b","type":"CategoricalTicker"},{"attributes":{"formatter":{"id":"212e75af-dab1-4f64-b7ca-8b54c11c781d","type":"CategoricalTickFormatter"},"plot":{"id":"60a44451-e498-4a71-ae81-4db05a523543","subtype":"Figure","type":"Plot"},"ticker":{"id":"39277559-1ae5-40e5-8ba4-755bd6b0db5b","type":"CategoricalTicker"}},"id":"137f08e2-b0bf-41de-bf9b-f296b9a0e2e8","type":"CategoricalAxis"},{"attributes":{},"id":"6c3a3d90-75a2-43b9-bfb6-414381f66be2","type":"BasicTicker"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"60a44451-e498-4a71-ae81-4db05a523543","subtype":"Figure","type":"Plot"},"ticker":{"id":"39277559-1ae5-40e5-8ba4-755bd6b0db5b","type":"CategoricalTicker"}},"id":"2e620696-3e6d-4983-b89d-843eba90f933","type":"Grid"},{"attributes":{},"id":"9fb65216-32dc-422a-9ec3-fa044738362a","type":"CategoricalScale"},{"attributes":{},"id":"77751802-1b95-4852-aead-e9741df2fe41","type":"LinearScale"},{"attributes":{"callback":null,"start":0},"id":"19df4bdc-da6b-4133-9143-fc7212dab050","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"60a44451-e498-4a71-ae81-4db05a523543","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c3a3d90-75a2-43b9-bfb6-414381f66be2","type":"BasicTicker"}},"id":"c19b7e62-784c-47ac-bcb6-008a8a3130f4","type":"Grid"},{"attributes":{"source":{"id":"5082f6d9-b131-4f29-b143-958c5122505c","type":"ColumnDataSource"}},"id":"23b35743-81ec-4189-b855-ce3de3204315","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]}},"id":"5082f6d9-b131-4f29-b143-958c5122505c","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"137f08e2-b0bf-41de-bf9b-f296b9a0e2e8","type":"CategoricalAxis"}],"left":[{"id":"7486253d-bb15-4c4c-a2f4-5a0e61af6bba","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"137f08e2-b0bf-41de-bf9b-f296b9a0e2e8","type":"CategoricalAxis"},{"id":"2e620696-3e6d-4983-b89d-843eba90f933","type":"Grid"},{"id":"7486253d-bb15-4c4c-a2f4-5a0e61af6bba","type":"LinearAxis"},{"id":"c19b7e62-784c-47ac-bcb6-008a8a3130f4","type":"Grid"},{"id":"7a78db96-ff0a-4ac2-a37a-3d9184c52b74","type":"GlyphRenderer"}],"title":{"id":"598e3494-010c-49fc-aa95-b81c35f2551d","type":"Title"},"toolbar":{"id":"7a6a6fc7-a773-4647-b84d-dec3fc39fb53","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"05dd5a4f-b7d5-4612-97dc-eab52840dff5","type":"FactorRange"},"x_scale":{"id":"9fb65216-32dc-422a-9ec3-fa044738362a","type":"CategoricalScale"},"y_range":{"id":"19df4bdc-da6b-4133-9143-fc7212dab050","type":"DataRange1d"},"y_scale":{"id":"77751802-1b95-4852-aead-e9741df2fe41","type":"LinearScale"}},"id":"60a44451-e498-4a71-ae81-4db05a523543","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"5082f6d9-b131-4f29-b143-958c5122505c","type":"ColumnDataSource"},"glyph":{"id":"f8e9eddc-a39d-4fee-837b-257fe1bb000f","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b8e11149-ba33-49b9-a72a-3ddcf4751f27","type":"VBar"},"selection_glyph":null,"view":{"id":"23b35743-81ec-4189-b855-ce3de3204315","type":"CDSView"}},"id":"7a78db96-ff0a-4ac2-a37a-3d9184c52b74","type":"GlyphRenderer"}],"root_ids":["60a44451-e498-4a71-ae81-4db05a523543"]},"title":"Bokeh Application","version":"0.12.12"}}';
                  var render_items = [{"docid":"592b41ab-03ba-418c-be4e-78c491168378","elementid":"f7e1b6ee-56e0-415f-ad3d-2f541d31d298","modelid":"60a44451-e498-4a71-ae81-4db05a523543"}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.12.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.12.min.css");
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