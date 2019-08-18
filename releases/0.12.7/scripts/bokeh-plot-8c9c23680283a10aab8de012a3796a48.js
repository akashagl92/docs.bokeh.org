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
      };var element = document.getElementById("4a8a617a-5012-4533-8e56-381c88a9e2d4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4a8a617a-5012-4533-8e56-381c88a9e2d4' but no matching script tag was found. ")
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
                var docs_json = {"f182262e-f246-4663-86af-4e9800d1569e":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b64f4214-6a05-4240-afef-223c52e73831","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"a266ba50-7114-4c82-ab56-aab672632f6b","type":"Title"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]}},"id":"47a05d30-6673-4f41-a778-baee153ec1ce","type":"ColumnDataSource"},{"attributes":{},"id":"1bb26fc7-3d66-443f-83b4-c2b8472b6c4b","type":"BasicTicker"},{"attributes":{},"id":"d02395e8-d0f4-4aee-8a64-f64d8cae9b35","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"7736ab03-5031-4bf6-8ce7-4e453dd883a9","type":"VBar"},{"attributes":{"data_source":{"id":"47a05d30-6673-4f41-a778-baee153ec1ce","type":"ColumnDataSource"},"glyph":{"id":"0bf65d89-57ca-4a7c-b8d4-3cc373a97265","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7736ab03-5031-4bf6-8ce7-4e453dd883a9","type":"VBar"},"selection_glyph":null,"view":{"id":"230997cb-6eb8-4ea0-84db-f8c8b6166d0e","type":"CDSView"}},"id":"e9c948fb-b0d1-4ec0-93f8-e54b55c1a21d","type":"GlyphRenderer"},{"attributes":{},"id":"6fe45608-b8ae-4cb2-ac13-4be2ca31a843","type":"HelpTool"},{"attributes":{"formatter":{"id":"ffe8c90a-1031-483f-a1ba-4eb511ca65ea","type":"BasicTickFormatter"},"plot":{"id":"cdba4a66-df5e-43f4-9142-25cfcbdc9c60","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8b9e943-ae91-4d6c-a4ed-9489117ccca6","type":"BasicTicker"}},"id":"b9961afb-e7d8-48b3-9c0c-955fa2bb67d4","type":"LinearAxis"},{"attributes":{"below":[{"id":"b9961afb-e7d8-48b3-9c0c-955fa2bb67d4","type":"LinearAxis"}],"left":[{"id":"13910f6d-bf60-4853-a1d1-0bde541b5099","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b9961afb-e7d8-48b3-9c0c-955fa2bb67d4","type":"LinearAxis"},{"id":"d678ad4f-07a9-4291-b38f-97b1833f1c11","type":"Grid"},{"id":"13910f6d-bf60-4853-a1d1-0bde541b5099","type":"LinearAxis"},{"id":"cc924d52-5f74-4d48-b872-52a6bf909438","type":"Grid"},{"id":"b64f4214-6a05-4240-afef-223c52e73831","type":"BoxAnnotation"},{"id":"e9c948fb-b0d1-4ec0-93f8-e54b55c1a21d","type":"GlyphRenderer"}],"title":{"id":"a266ba50-7114-4c82-ab56-aab672632f6b","type":"Title"},"toolbar":{"id":"ddf2265a-eff7-45e5-886b-f3b969257f3b","type":"Toolbar"},"x_range":{"id":"51ae4f52-abd9-4c7a-96b7-23df3bf4d936","type":"DataRange1d"},"x_scale":{"id":"191cc2e9-50c4-4b73-860c-44083e406dd0","type":"LinearScale"},"y_range":{"id":"a9cae49b-bea0-4ca2-b702-f0625a02171e","type":"DataRange1d"},"y_scale":{"id":"3e0817ff-94bf-4344-8f21-257d17dbfbd5","type":"LinearScale"}},"id":"cdba4a66-df5e-43f4-9142-25cfcbdc9c60","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1c9a7c9a-2914-46da-8ef7-b3f6a51e50b2","type":"BasicTickFormatter"},"plot":{"id":"cdba4a66-df5e-43f4-9142-25cfcbdc9c60","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bb26fc7-3d66-443f-83b4-c2b8472b6c4b","type":"BasicTicker"}},"id":"13910f6d-bf60-4853-a1d1-0bde541b5099","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d02395e8-d0f4-4aee-8a64-f64d8cae9b35","type":"PanTool"},{"id":"ce10506e-b257-4cd4-bb44-738b935d9a74","type":"WheelZoomTool"},{"id":"feee4f63-0729-4e33-a656-1b0938b66f13","type":"BoxZoomTool"},{"id":"bb8535e5-e9e0-4f3f-8661-0cf22d94bc3e","type":"SaveTool"},{"id":"6985532d-16e5-4474-98bc-fee21c6d9d13","type":"ResetTool"},{"id":"6fe45608-b8ae-4cb2-ac13-4be2ca31a843","type":"HelpTool"}]},"id":"ddf2265a-eff7-45e5-886b-f3b969257f3b","type":"Toolbar"},{"attributes":{"callback":null},"id":"a9cae49b-bea0-4ca2-b702-f0625a02171e","type":"DataRange1d"},{"attributes":{},"id":"6985532d-16e5-4474-98bc-fee21c6d9d13","type":"ResetTool"},{"attributes":{"source":{"id":"47a05d30-6673-4f41-a778-baee153ec1ce","type":"ColumnDataSource"}},"id":"230997cb-6eb8-4ea0-84db-f8c8b6166d0e","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"cdba4a66-df5e-43f4-9142-25cfcbdc9c60","subtype":"Figure","type":"Plot"},"ticker":{"id":"1bb26fc7-3d66-443f-83b4-c2b8472b6c4b","type":"BasicTicker"}},"id":"cc924d52-5f74-4d48-b872-52a6bf909438","type":"Grid"},{"attributes":{},"id":"3e0817ff-94bf-4344-8f21-257d17dbfbd5","type":"LinearScale"},{"attributes":{},"id":"ce10506e-b257-4cd4-bb44-738b935d9a74","type":"WheelZoomTool"},{"attributes":{},"id":"191cc2e9-50c4-4b73-860c-44083e406dd0","type":"LinearScale"},{"attributes":{"callback":null},"id":"51ae4f52-abd9-4c7a-96b7-23df3bf4d936","type":"DataRange1d"},{"attributes":{},"id":"bb8535e5-e9e0-4f3f-8661-0cf22d94bc3e","type":"SaveTool"},{"attributes":{"plot":{"id":"cdba4a66-df5e-43f4-9142-25cfcbdc9c60","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8b9e943-ae91-4d6c-a4ed-9489117ccca6","type":"BasicTicker"}},"id":"d678ad4f-07a9-4291-b38f-97b1833f1c11","type":"Grid"},{"attributes":{},"id":"ffe8c90a-1031-483f-a1ba-4eb511ca65ea","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"b64f4214-6a05-4240-afef-223c52e73831","type":"BoxAnnotation"}},"id":"feee4f63-0729-4e33-a656-1b0938b66f13","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"0bf65d89-57ca-4a7c-b8d4-3cc373a97265","type":"VBar"},{"attributes":{},"id":"e8b9e943-ae91-4d6c-a4ed-9489117ccca6","type":"BasicTicker"},{"attributes":{},"id":"1c9a7c9a-2914-46da-8ef7-b3f6a51e50b2","type":"BasicTickFormatter"}],"root_ids":["cdba4a66-df5e-43f4-9142-25cfcbdc9c60"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"f182262e-f246-4663-86af-4e9800d1569e","elementid":"4a8a617a-5012-4533-8e56-381c88a9e2d4","modelid":"cdba4a66-df5e-43f4-9142-25cfcbdc9c60"}];
                
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
