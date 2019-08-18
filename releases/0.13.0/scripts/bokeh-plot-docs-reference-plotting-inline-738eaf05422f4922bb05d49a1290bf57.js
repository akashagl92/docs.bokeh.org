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
      };var element = document.getElementById("d308e4f0-984b-46cf-8c01-295a3b46de8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd308e4f0-984b-46cf-8c01-295a3b46de8a' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"87e16446-edd0-463d-8b99-0ba9de1cb7b7":{"roots":{"references":[{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"465adfdc-7445-4146-b3d6-dedadbd7a347","type":"Selection"},"selection_policy":{"id":"2f4b5d2f-936b-45dc-983d-12b95188c544","type":"UnionRenderers"}},"id":"91be7c01-9f5d-4b62-9228-f76e842ea427","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a5ea725a-6822-42ab-a706-9d1529c23a5a","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"91be7c01-9f5d-4b62-9228-f76e842ea427","type":"ColumnDataSource"},"glyph":{"id":"03ea2981-17bb-4c42-b939-a1247167bc99","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c76a1a4f-656a-4b1b-9ea6-fcc7384d0176","type":"Ellipse"},"selection_glyph":null,"view":{"id":"2be9e3c8-05e7-4aec-907e-a44b4955626f","type":"CDSView"}},"id":"46ba0375-ce1f-4b9d-8d08-d21f0487c77e","type":"GlyphRenderer"},{"attributes":{},"id":"f94f1efc-44c2-4322-a314-1271061aef2b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"f94f1efc-44c2-4322-a314-1271061aef2b","type":"PanTool"},{"id":"3ad95317-027c-4d26-a09f-758ed8239252","type":"WheelZoomTool"},{"id":"c75cdd46-7354-4e77-8f01-0c2b7675f1d1","type":"BoxZoomTool"},{"id":"c9b95a35-b43f-4a03-9028-3af60e04116f","type":"SaveTool"},{"id":"c60b9dc8-a302-41f5-9afd-7156eee22f72","type":"ResetTool"},{"id":"5334ecf5-f221-4af2-a070-ec1113d86e29","type":"HelpTool"}]},"id":"5a594e6e-6109-4739-acf1-54c6da64e252","type":"Toolbar"},{"attributes":{"source":{"id":"91be7c01-9f5d-4b62-9228-f76e842ea427","type":"ColumnDataSource"}},"id":"2be9e3c8-05e7-4aec-907e-a44b4955626f","type":"CDSView"},{"attributes":{"callback":null},"id":"e798369d-5623-48be-a824-2bf78ba9a8c9","type":"DataRange1d"},{"attributes":{"below":[{"id":"e444cb5b-3714-46f7-b58e-1b6fbfd87878","type":"LinearAxis"}],"left":[{"id":"c9d48f48-0424-49d6-b519-0d6bbc87d347","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e444cb5b-3714-46f7-b58e-1b6fbfd87878","type":"LinearAxis"},{"id":"72ffe3a7-ba48-4bf1-acec-8994b1bef192","type":"Grid"},{"id":"c9d48f48-0424-49d6-b519-0d6bbc87d347","type":"LinearAxis"},{"id":"3158c3c6-9ec7-4629-a676-7965e6955568","type":"Grid"},{"id":"a5ea725a-6822-42ab-a706-9d1529c23a5a","type":"BoxAnnotation"},{"id":"46ba0375-ce1f-4b9d-8d08-d21f0487c77e","type":"GlyphRenderer"}],"title":{"id":"6da341c0-898e-4774-a2de-6b5b247ba0b2","type":"Title"},"toolbar":{"id":"5a594e6e-6109-4739-acf1-54c6da64e252","type":"Toolbar"},"x_range":{"id":"e798369d-5623-48be-a824-2bf78ba9a8c9","type":"DataRange1d"},"x_scale":{"id":"5e03f531-c160-4325-b5a7-d9132696ff5e","type":"LinearScale"},"y_range":{"id":"681dec9c-6103-4366-b1ed-0ad014c38992","type":"DataRange1d"},"y_scale":{"id":"8e685c1f-9933-4968-82e8-002cfdeb1425","type":"LinearScale"}},"id":"2f128cc7-e248-4bd3-a76f-93a2cc7636c4","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3ad95317-027c-4d26-a09f-758ed8239252","type":"WheelZoomTool"},{"attributes":{},"id":"e307166c-ab04-4a3d-be9f-9070646c6a3a","type":"BasicTicker"},{"attributes":{"overlay":{"id":"a5ea725a-6822-42ab-a706-9d1529c23a5a","type":"BoxAnnotation"}},"id":"c75cdd46-7354-4e77-8f01-0c2b7675f1d1","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"03ea2981-17bb-4c42-b939-a1247167bc99","type":"Ellipse"},{"attributes":{},"id":"c9b95a35-b43f-4a03-9028-3af60e04116f","type":"SaveTool"},{"attributes":{"formatter":{"id":"05a629c5-7ef8-4725-bde9-d92f9d54e1aa","type":"BasicTickFormatter"},"plot":{"id":"2f128cc7-e248-4bd3-a76f-93a2cc7636c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e307166c-ab04-4a3d-be9f-9070646c6a3a","type":"BasicTicker"}},"id":"e444cb5b-3714-46f7-b58e-1b6fbfd87878","type":"LinearAxis"},{"attributes":{},"id":"c60b9dc8-a302-41f5-9afd-7156eee22f72","type":"ResetTool"},{"attributes":{"callback":null},"id":"681dec9c-6103-4366-b1ed-0ad014c38992","type":"DataRange1d"},{"attributes":{},"id":"5334ecf5-f221-4af2-a070-ec1113d86e29","type":"HelpTool"},{"attributes":{},"id":"5e03f531-c160-4325-b5a7-d9132696ff5e","type":"LinearScale"},{"attributes":{},"id":"05a629c5-7ef8-4725-bde9-d92f9d54e1aa","type":"BasicTickFormatter"},{"attributes":{},"id":"8e685c1f-9933-4968-82e8-002cfdeb1425","type":"LinearScale"},{"attributes":{"plot":{"id":"2f128cc7-e248-4bd3-a76f-93a2cc7636c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e307166c-ab04-4a3d-be9f-9070646c6a3a","type":"BasicTicker"}},"id":"72ffe3a7-ba48-4bf1-acec-8994b1bef192","type":"Grid"},{"attributes":{},"id":"465adfdc-7445-4146-b3d6-dedadbd7a347","type":"Selection"},{"attributes":{"formatter":{"id":"72578b1b-3551-480a-89ad-099d65ae5164","type":"BasicTickFormatter"},"plot":{"id":"2f128cc7-e248-4bd3-a76f-93a2cc7636c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"11e3e5a1-ec56-41c9-86c0-e99afa087412","type":"BasicTicker"}},"id":"c9d48f48-0424-49d6-b519-0d6bbc87d347","type":"LinearAxis"},{"attributes":{},"id":"72578b1b-3551-480a-89ad-099d65ae5164","type":"BasicTickFormatter"},{"attributes":{},"id":"11e3e5a1-ec56-41c9-86c0-e99afa087412","type":"BasicTicker"},{"attributes":{},"id":"2f4b5d2f-936b-45dc-983d-12b95188c544","type":"UnionRenderers"},{"attributes":{"dimension":1,"plot":{"id":"2f128cc7-e248-4bd3-a76f-93a2cc7636c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"11e3e5a1-ec56-41c9-86c0-e99afa087412","type":"BasicTicker"}},"id":"3158c3c6-9ec7-4629-a676-7965e6955568","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"c76a1a4f-656a-4b1b-9ea6-fcc7384d0176","type":"Ellipse"},{"attributes":{"plot":null,"text":""},"id":"6da341c0-898e-4774-a2de-6b5b247ba0b2","type":"Title"}],"root_ids":["2f128cc7-e248-4bd3-a76f-93a2cc7636c4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"87e16446-edd0-463d-8b99-0ba9de1cb7b7","roots":{"2f128cc7-e248-4bd3-a76f-93a2cc7636c4":"d308e4f0-984b-46cf-8c01-295a3b46de8a"}}];
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