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
      };var element = document.getElementById("2364ed23-5b28-427a-86c6-dde51fb359ab");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2364ed23-5b28-427a-86c6-dde51fb359ab' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"29dabc2b-b8ba-48f2-8c2a-c571d719c383":{"roots":{"references":[{"attributes":{},"id":"5cce43c6-d73b-423b-99e9-b2f977741c89","type":"HelpTool"},{"attributes":{"data_source":{"id":"594b930e-5346-4b01-b56e-47545575ccc0","type":"ColumnDataSource"},"glyph":{"id":"b8989dc4-87ce-47d0-80ee-f88799ff113d","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"75561605-6bb8-4624-8b43-f1ef15295ef6","type":"HBar"},"selection_glyph":null,"view":{"id":"e939b8f4-838d-424c-be9f-b5374a963889","type":"CDSView"}},"id":"8c1dc009-627d-4e0c-8bf0-b91fda42f660","type":"GlyphRenderer"},{"attributes":{},"id":"dac24138-9a99-4d02-aa70-6b9dd87b6aed","type":"ResetTool"},{"attributes":{"plot":{"id":"a1f10eeb-9b9c-4e59-aeaf-d2dedf02c9ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"8524fd68-3d80-4602-9ab6-fd9b2e5afaaa","type":"BasicTicker"}},"id":"afadd617-b88d-471c-a4c9-885b6f1db343","type":"Grid"},{"attributes":{},"id":"08533957-a806-49b2-9750-f76c2536a71a","type":"BasicTickFormatter"},{"attributes":{},"id":"3292976b-df84-4f56-ab84-9cacf2f336ca","type":"BasicTicker"},{"attributes":{},"id":"f6f7e255-10e8-4905-be78-9c8554351fc1","type":"LinearScale"},{"attributes":{},"id":"e97cd9f5-660b-4299-b10b-50de4245e927","type":"SaveTool"},{"attributes":{"below":[{"id":"b681f35c-9a2d-48f0-94d0-9bb50bfee97e","type":"LinearAxis"}],"left":[{"id":"8e6f876d-6cd1-40c6-b8e3-ee9275ede5b8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b681f35c-9a2d-48f0-94d0-9bb50bfee97e","type":"LinearAxis"},{"id":"afadd617-b88d-471c-a4c9-885b6f1db343","type":"Grid"},{"id":"8e6f876d-6cd1-40c6-b8e3-ee9275ede5b8","type":"LinearAxis"},{"id":"2ea9df56-893b-4c21-a316-adeb3b8b4589","type":"Grid"},{"id":"ad1e7c09-d902-45f6-8385-3db4e7bbb2a4","type":"BoxAnnotation"},{"id":"8c1dc009-627d-4e0c-8bf0-b91fda42f660","type":"GlyphRenderer"}],"title":{"id":"156184b4-2724-4afb-858a-55f83095f047","type":"Title"},"toolbar":{"id":"a2aab2b3-1aae-4205-baa4-08b631f33c67","type":"Toolbar"},"x_range":{"id":"fef451fd-4545-4696-ad11-a792965889d8","type":"DataRange1d"},"x_scale":{"id":"afc2a80e-5d5e-4284-a48f-083698e8be51","type":"LinearScale"},"y_range":{"id":"34ad7bbf-f735-4fb3-9f75-8f03083587c9","type":"DataRange1d"},"y_scale":{"id":"f6f7e255-10e8-4905-be78-9c8554351fc1","type":"LinearScale"}},"id":"a1f10eeb-9b9c-4e59-aeaf-d2dedf02c9ba","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"08533957-a806-49b2-9750-f76c2536a71a","type":"BasicTickFormatter"},"plot":{"id":"a1f10eeb-9b9c-4e59-aeaf-d2dedf02c9ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"8524fd68-3d80-4602-9ab6-fd9b2e5afaaa","type":"BasicTicker"}},"id":"b681f35c-9a2d-48f0-94d0-9bb50bfee97e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"34ad7bbf-f735-4fb3-9f75-8f03083587c9","type":"DataRange1d"},{"attributes":{"source":{"id":"594b930e-5346-4b01-b56e-47545575ccc0","type":"ColumnDataSource"}},"id":"e939b8f4-838d-424c-be9f-b5374a963889","type":"CDSView"},{"attributes":{},"id":"1db9133b-9528-452e-9cec-eade3a17b550","type":"UnionRenderers"},{"attributes":{},"id":"afc2a80e-5d5e-4284-a48f-083698e8be51","type":"LinearScale"},{"attributes":{"callback":null,"data":{"right":[1.2,2.5,3.7],"y":[1,2,3]},"selected":{"id":"341bd156-ba59-4af0-aff1-11ee3de11627","type":"Selection"},"selection_policy":{"id":"1db9133b-9528-452e-9cec-eade3a17b550","type":"UnionRenderers"}},"id":"594b930e-5346-4b01-b56e-47545575ccc0","type":"ColumnDataSource"},{"attributes":{},"id":"8524fd68-3d80-4602-9ab6-fd9b2e5afaaa","type":"BasicTicker"},{"attributes":{"callback":null},"id":"fef451fd-4545-4696-ad11-a792965889d8","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"81d785c8-a46d-48ee-b8f6-96af73a9334f","type":"PanTool"},{"id":"c1f0d60f-7ffc-41fb-9590-8ea3c8503da8","type":"WheelZoomTool"},{"id":"5f0ab9c8-27aa-46cb-a8fb-7e39c30e20bf","type":"BoxZoomTool"},{"id":"e97cd9f5-660b-4299-b10b-50de4245e927","type":"SaveTool"},{"id":"dac24138-9a99-4d02-aa70-6b9dd87b6aed","type":"ResetTool"},{"id":"5cce43c6-d73b-423b-99e9-b2f977741c89","type":"HelpTool"}]},"id":"a2aab2b3-1aae-4205-baa4-08b631f33c67","type":"Toolbar"},{"attributes":{},"id":"c1f0d60f-7ffc-41fb-9590-8ea3c8503da8","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"ad1e7c09-d902-45f6-8385-3db4e7bbb2a4","type":"BoxAnnotation"}},"id":"5f0ab9c8-27aa-46cb-a8fb-7e39c30e20bf","type":"BoxZoomTool"},{"attributes":{},"id":"341bd156-ba59-4af0-aff1-11ee3de11627","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad1e7c09-d902-45f6-8385-3db4e7bbb2a4","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"a1f10eeb-9b9c-4e59-aeaf-d2dedf02c9ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"3292976b-df84-4f56-ab84-9cacf2f336ca","type":"BasicTicker"}},"id":"2ea9df56-893b-4c21-a316-adeb3b8b4589","type":"Grid"},{"attributes":{},"id":"de90d56a-dbe7-42dd-84f7-359f775f1471","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"75561605-6bb8-4624-8b43-f1ef15295ef6","type":"HBar"},{"attributes":{"fill_color":{"value":"navy"},"height":{"value":0.5},"line_color":{"value":"navy"},"right":{"field":"right"},"y":{"field":"y"}},"id":"b8989dc4-87ce-47d0-80ee-f88799ff113d","type":"HBar"},{"attributes":{},"id":"81d785c8-a46d-48ee-b8f6-96af73a9334f","type":"PanTool"},{"attributes":{"plot":null,"text":""},"id":"156184b4-2724-4afb-858a-55f83095f047","type":"Title"},{"attributes":{"formatter":{"id":"de90d56a-dbe7-42dd-84f7-359f775f1471","type":"BasicTickFormatter"},"plot":{"id":"a1f10eeb-9b9c-4e59-aeaf-d2dedf02c9ba","subtype":"Figure","type":"Plot"},"ticker":{"id":"3292976b-df84-4f56-ab84-9cacf2f336ca","type":"BasicTicker"}},"id":"8e6f876d-6cd1-40c6-b8e3-ee9275ede5b8","type":"LinearAxis"}],"root_ids":["a1f10eeb-9b9c-4e59-aeaf-d2dedf02c9ba"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"29dabc2b-b8ba-48f2-8c2a-c571d719c383","roots":{"a1f10eeb-9b9c-4e59-aeaf-d2dedf02c9ba":"2364ed23-5b28-427a-86c6-dde51fb359ab"}}];
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