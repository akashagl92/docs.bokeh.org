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
      };var element = document.getElementById("91c624d0-4495-46df-9203-21d7a1e30396");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91c624d0-4495-46df-9203-21d7a1e30396' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"c46fd87c-70a0-48ab-916a-904991cbf531":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2],"y":[3,4]}},"id":"26e60240-0945-4462-a3d6-a1f10daf1c76","type":"ColumnDataSource"},{"attributes":{},"id":"73230e48-499c-436f-864c-37d7db32c7b7","type":"HelpTool"},{"attributes":{"callback":null},"id":"03f58fbc-85ef-45e6-83f8-70fb9ac30d27","type":"DataRange1d"},{"attributes":{},"id":"19b7d870-5a6d-4b5a-9ce9-f5254cd6e635","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3648024c-5fb5-447e-8498-99e14af53ad9","type":"PanTool"},{"id":"d8aab224-616a-42e1-af88-ccac4444f59c","type":"WheelZoomTool"},{"id":"c16c3421-de8a-4e93-b968-1ba638575891","type":"BoxZoomTool"},{"id":"4bc1a8f3-2913-4f68-a465-02294fa0063b","type":"SaveTool"},{"id":"88619ae6-76ff-44a1-8cdb-6bc5b2c30d52","type":"ResetTool"},{"id":"73230e48-499c-436f-864c-37d7db32c7b7","type":"HelpTool"}]},"id":"33bfd55c-d252-4cab-a0bd-0f41503f2b66","type":"Toolbar"},{"attributes":{"formatter":{"id":"8fc2f9e9-5f90-4fc5-a16c-9f9536655cfa","type":"BasicTickFormatter"},"plot":{"id":"af7e0298-7f42-473f-9284-d2edb5efe950","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc4aade4-d8ba-4d8e-9171-97d3e8854a1f","type":"BasicTicker"}},"id":"fd896a1f-721e-48ff-a436-6a08066bd9e5","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"1c7106c4-e8cf-442e-bcd5-adaa0f35be8c","type":"Title"},{"attributes":{"overlay":{"id":"033358eb-c78d-4500-943c-8b3d667d4287","type":"BoxAnnotation"}},"id":"c16c3421-de8a-4e93-b968-1ba638575891","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"5b070b23-688c-477b-a458-80cb17de76c9","type":"DataRange1d"},{"attributes":{},"id":"8fc2f9e9-5f90-4fc5-a16c-9f9536655cfa","type":"BasicTickFormatter"},{"attributes":{},"id":"d8aab224-616a-42e1-af88-ccac4444f59c","type":"WheelZoomTool"},{"attributes":{},"id":"88619ae6-76ff-44a1-8cdb-6bc5b2c30d52","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"af7e0298-7f42-473f-9284-d2edb5efe950","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a4eb926-02a8-4263-bf0b-30f477857de9","type":"BasicTicker"}},"id":"5e5f8c1c-4807-432f-a2ec-62779ec8e074","type":"Grid"},{"attributes":{"below":[{"id":"fd896a1f-721e-48ff-a436-6a08066bd9e5","type":"LinearAxis"}],"left":[{"id":"a8f85bff-5e81-4aeb-96f0-baae07b7cb83","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"fd896a1f-721e-48ff-a436-6a08066bd9e5","type":"LinearAxis"},{"id":"37dc2103-a79d-455c-addc-f59048812f49","type":"Grid"},{"id":"a8f85bff-5e81-4aeb-96f0-baae07b7cb83","type":"LinearAxis"},{"id":"5e5f8c1c-4807-432f-a2ec-62779ec8e074","type":"Grid"},{"id":"033358eb-c78d-4500-943c-8b3d667d4287","type":"BoxAnnotation"},{"id":"cdc2a7e1-f1ac-4576-aeb1-7810e4800c06","type":"GlyphRenderer"}],"title":{"id":"1c7106c4-e8cf-442e-bcd5-adaa0f35be8c","type":"Title"},"toolbar":{"id":"33bfd55c-d252-4cab-a0bd-0f41503f2b66","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"5b070b23-688c-477b-a458-80cb17de76c9","type":"DataRange1d"},"x_scale":{"id":"30777f49-3fe7-44bb-b563-687d9d6a42c6","type":"LinearScale"},"y_range":{"id":"03f58fbc-85ef-45e6-83f8-70fb9ac30d27","type":"DataRange1d"},"y_scale":{"id":"d0ebb5c7-6c63-4d75-b27d-0b683d2e4f82","type":"LinearScale"}},"id":"af7e0298-7f42-473f-9284-d2edb5efe950","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"50d5a400-7de3-48b3-b129-5ed868301984","type":"Circle"},{"attributes":{},"id":"1a4eb926-02a8-4263-bf0b-30f477857de9","type":"BasicTicker"},{"attributes":{"plot":{"id":"af7e0298-7f42-473f-9284-d2edb5efe950","subtype":"Figure","type":"Plot"},"ticker":{"id":"cc4aade4-d8ba-4d8e-9171-97d3e8854a1f","type":"BasicTicker"}},"id":"37dc2103-a79d-455c-addc-f59048812f49","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"033358eb-c78d-4500-943c-8b3d667d4287","type":"BoxAnnotation"},{"attributes":{"source":{"id":"26e60240-0945-4462-a3d6-a1f10daf1c76","type":"ColumnDataSource"}},"id":"7d9df713-50a6-4be3-8948-fb57f52202de","type":"CDSView"},{"attributes":{"formatter":{"id":"19b7d870-5a6d-4b5a-9ce9-f5254cd6e635","type":"BasicTickFormatter"},"plot":{"id":"af7e0298-7f42-473f-9284-d2edb5efe950","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a4eb926-02a8-4263-bf0b-30f477857de9","type":"BasicTicker"}},"id":"a8f85bff-5e81-4aeb-96f0-baae07b7cb83","type":"LinearAxis"},{"attributes":{},"id":"3648024c-5fb5-447e-8498-99e14af53ad9","type":"PanTool"},{"attributes":{},"id":"4bc1a8f3-2913-4f68-a465-02294fa0063b","type":"SaveTool"},{"attributes":{"data_source":{"id":"26e60240-0945-4462-a3d6-a1f10daf1c76","type":"ColumnDataSource"},"glyph":{"id":"46051dc9-ebd5-40ae-8b80-4f3e2b0db90b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"50d5a400-7de3-48b3-b129-5ed868301984","type":"Circle"},"selection_glyph":null,"view":{"id":"7d9df713-50a6-4be3-8948-fb57f52202de","type":"CDSView"}},"id":"cdc2a7e1-f1ac-4576-aeb1-7810e4800c06","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"46051dc9-ebd5-40ae-8b80-4f3e2b0db90b","type":"Circle"},{"attributes":{},"id":"d0ebb5c7-6c63-4d75-b27d-0b683d2e4f82","type":"LinearScale"},{"attributes":{},"id":"30777f49-3fe7-44bb-b563-687d9d6a42c6","type":"LinearScale"},{"attributes":{},"id":"cc4aade4-d8ba-4d8e-9171-97d3e8854a1f","type":"BasicTicker"}],"root_ids":["af7e0298-7f42-473f-9284-d2edb5efe950"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"c46fd87c-70a0-48ab-916a-904991cbf531","elementid":"91c624d0-4495-46df-9203-21d7a1e30396","modelid":"af7e0298-7f42-473f-9284-d2edb5efe950"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
