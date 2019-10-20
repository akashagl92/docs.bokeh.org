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
      };var element = document.getElementById("12fba729-70d6-49b4-b891-2b24767b61ac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '12fba729-70d6-49b4-b891-2b24767b61ac' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bf8e7bd3-fec3-4d15-b298-e96661ee1d21":{"roots":{"references":[{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ca5e5e0f-212a-42f4-a9f8-102bd93812c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a003249e-11c8-4803-a61a-08ed4da61c2f","type":"CategoricalTicker"}},"id":"79aebb7a-66f7-4ab2-ae86-144ff5069856","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ca5e5e0f-212a-42f4-a9f8-102bd93812c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"94a03586-b8a9-40fc-b91e-1f135dd979ec","type":"BasicTicker"}},"id":"9b66c04c-b642-4d42-ae33-6d06040d4466","type":"Grid"},{"attributes":{"formatter":{"id":"8a502980-154e-443f-b896-af2c271de7b8","type":"CategoricalTickFormatter"},"plot":{"id":"ca5e5e0f-212a-42f4-a9f8-102bd93812c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a003249e-11c8-4803-a61a-08ed4da61c2f","type":"CategoricalTicker"}},"id":"d2d4bbdf-d780-4402-a6e7-84758a07a2f4","type":"CategoricalAxis"},{"attributes":{"callback":null,"start":0},"id":"fc742eb4-f5ec-4a62-96c0-1b7ce136b08f","type":"DataRange1d"},{"attributes":{"plot":null,"text":"Fruit Counts"},"id":"64574205-f95a-452f-9aad-979db3ca50c8","type":"Title"},{"attributes":{},"id":"8a502980-154e-443f-b896-af2c271de7b8","type":"CategoricalTickFormatter"},{"attributes":{},"id":"0150ccbc-6c32-465d-abab-e599efb680a1","type":"CategoricalScale"},{"attributes":{},"id":"86147c02-ed73-4116-859b-3fbb508b6b27","type":"LinearScale"},{"attributes":{},"id":"94a03586-b8a9-40fc-b91e-1f135dd979ec","type":"BasicTicker"},{"attributes":{},"id":"18308b63-f302-4a8e-bc80-910d6f44d77d","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"e9789892-4384-4f33-b5c9-3816b5cd8e39","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"d691e9fd-91b1-4a27-be72-6001be100890","type":"VBar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"ba85f264-6e56-48a5-8a5d-8a267014d344","type":"VBar"},{"attributes":{"data_source":{"id":"ee009f8a-dad2-45ed-a1b7-672572363c32","type":"ColumnDataSource"},"glyph":{"id":"ba85f264-6e56-48a5-8a5d-8a267014d344","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d691e9fd-91b1-4a27-be72-6001be100890","type":"VBar"},"selection_glyph":null,"view":{"id":"37944e1f-c211-4928-ad50-16cf5f0f4dca","type":"CDSView"}},"id":"694a9e7a-70ac-473d-bda0-8da488a6205d","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"d2d4bbdf-d780-4402-a6e7-84758a07a2f4","type":"CategoricalAxis"}],"left":[{"id":"16a31c12-0f93-432e-b3b3-77fec7d8edb3","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"d2d4bbdf-d780-4402-a6e7-84758a07a2f4","type":"CategoricalAxis"},{"id":"79aebb7a-66f7-4ab2-ae86-144ff5069856","type":"Grid"},{"id":"16a31c12-0f93-432e-b3b3-77fec7d8edb3","type":"LinearAxis"},{"id":"9b66c04c-b642-4d42-ae33-6d06040d4466","type":"Grid"},{"id":"694a9e7a-70ac-473d-bda0-8da488a6205d","type":"GlyphRenderer"}],"title":{"id":"64574205-f95a-452f-9aad-979db3ca50c8","type":"Title"},"toolbar":{"id":"e9789892-4384-4f33-b5c9-3816b5cd8e39","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4101dfd1-ca52-4251-82e6-2da3542475d7","type":"FactorRange"},"x_scale":{"id":"0150ccbc-6c32-465d-abab-e599efb680a1","type":"CategoricalScale"},"y_range":{"id":"fc742eb4-f5ec-4a62-96c0-1b7ce136b08f","type":"DataRange1d"},"y_scale":{"id":"86147c02-ed73-4116-859b-3fbb508b6b27","type":"LinearScale"}},"id":"ca5e5e0f-212a-42f4-a9f8-102bd93812c3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"481214c0-b3a7-4e84-b6d9-e87fa11252ed","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Apples","Pears","Nectarines","Plums","Grapes","Strawberries"]},"id":"4101dfd1-ca52-4251-82e6-2da3542475d7","type":"FactorRange"},{"attributes":{"source":{"id":"ee009f8a-dad2-45ed-a1b7-672572363c32","type":"ColumnDataSource"}},"id":"37944e1f-c211-4928-ad50-16cf5f0f4dca","type":"CDSView"},{"attributes":{},"id":"c5ef571d-9006-40fc-a9d8-707205991d0b","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"481214c0-b3a7-4e84-b6d9-e87fa11252ed","type":"BasicTickFormatter"},"plot":{"id":"ca5e5e0f-212a-42f4-a9f8-102bd93812c3","subtype":"Figure","type":"Plot"},"ticker":{"id":"94a03586-b8a9-40fc-b91e-1f135dd979ec","type":"BasicTicker"}},"id":"16a31c12-0f93-432e-b3b3-77fec7d8edb3","type":"LinearAxis"},{"attributes":{},"id":"a003249e-11c8-4803-a61a-08ed4da61c2f","type":"CategoricalTicker"},{"attributes":{"callback":null,"data":{"top":[5,3,4,2,4,6],"x":[["Apples",-0.5],["Pears",-0.2],["Nectarines",0.0],["Plums",0.3],["Grapes",0.1],["Strawberries",0.3]]},"selected":{"id":"18308b63-f302-4a8e-bc80-910d6f44d77d","type":"Selection"},"selection_policy":{"id":"c5ef571d-9006-40fc-a9d8-707205991d0b","type":"UnionRenderers"}},"id":"ee009f8a-dad2-45ed-a1b7-672572363c32","type":"ColumnDataSource"}],"root_ids":["ca5e5e0f-212a-42f4-a9f8-102bd93812c3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"bf8e7bd3-fec3-4d15-b298-e96661ee1d21","roots":{"ca5e5e0f-212a-42f4-a9f8-102bd93812c3":"12fba729-70d6-49b4-b891-2b24767b61ac"}}];
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