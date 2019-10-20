(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("8f087e49-fd49-4b70-b336-4855c52d126f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8f087e49-fd49-4b70-b336-4855c52d126f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"af08f654-96c3-419d-957a-f43a0cb4cda4":{"roots":{"references":[{"attributes":{"callback":null},"id":"6384bfd5-3544-4582-b9f5-99be9c8b3487","type":"DataRange1d"},{"attributes":{"data_source":{"id":"692f8315-634f-436a-8f14-1d2c2b290902","type":"ColumnDataSource"},"glyph":{"id":"90437960-653b-4aa3-ada5-b17101436797","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"22c3a06b-9611-46f2-a941-51a080c22640","type":"Line"},"selection_glyph":null},"id":"ecf5e2c2-f1ba-49d9-b771-39efa3e32444","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"}},"id":"4c911e1b-3ed5-4f5a-8b1b-8bd8509f58a5","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"22c3a06b-9611-46f2-a941-51a080c22640","type":"Line"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2d5e565-0da5-464a-b0f0-a462214e6e94","type":"Circle"},{"attributes":{"formatter":{"id":"a2d16466-01dd-4a85-af88-443da29488be","type":"BasicTickFormatter"},"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"112b82fc-970d-4eba-823d-462b12069f93","type":"BasicTicker"}},"id":"2178f408-2f93-4e35-84ad-250e641918dc","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"949a6f46-8794-457b-9a2c-049e0b7b834c","type":"Title"},{"attributes":{"overlay":{"id":"ed90a5de-7027-4eb7-acdc-88f1cf64aeb8","type":"BoxAnnotation"},"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"}},"id":"8caacd5c-8d79-4ab0-b573-3ca3b0ad0ad6","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"}},"id":"d61244a4-5da6-4838-b39c-8218ab7e0ddc","type":"SaveTool"},{"attributes":{"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"}},"id":"d38edf17-1f98-4cdb-9438-cf363d052266","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d2d4ffe5-ab20-41c0-ac48-041473d46c90","type":"Circle"},{"attributes":{"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"},"ticker":{"id":"52bbb813-c010-4dbf-ba10-3d5423ec8ae7","type":"BasicTicker"}},"id":"7b857149-183e-49fe-a384-0bad722aca6a","type":"Grid"},{"attributes":{"child":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"48cf358a-a837-41bd-a27c-f01577af8bad","type":"Panel"},{"attributes":{"callback":null},"id":"7aa7c86c-1360-40f3-80d5-38f5fbefd99d","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"c345c109-15b3-494e-9893-9d4e63a20c0f","type":"Title"},{"attributes":{"child":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"},"title":"line"},"id":"afec4d7d-25f9-43ee-8a72-5c36b800acfc","type":"Panel"},{"attributes":{"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"}},"id":"eec6e581-67af-4718-a665-45a4313f5838","type":"ResetTool"},{"attributes":{},"id":"52bbb813-c010-4dbf-ba10-3d5423ec8ae7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8a675407-533b-4f39-b434-ce8773baa4ab","type":"BasicTickFormatter"},"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc703de1-a505-452f-99b6-9152b6de4d82","type":"BasicTicker"}},"id":"1ed9466d-0607-4a75-bd7e-585aaafd966a","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"90437960-653b-4aa3-ada5-b17101436797","type":"Line"},{"attributes":{"formatter":{"id":"9b7683bb-906b-4ddb-a63d-c14ebc7d807f","type":"BasicTickFormatter"},"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"},"ticker":{"id":"eab9e3df-97f7-4135-8762-328a0250436e","type":"BasicTicker"}},"id":"b34374a9-c6f8-435d-93e9-2ec2f2567fcb","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"},"ticker":{"id":"eab9e3df-97f7-4135-8762-328a0250436e","type":"BasicTicker"}},"id":"10633165-e6a2-46bf-b32a-ae7ec6733677","type":"Grid"},{"attributes":{"callback":null,"tabs":[{"id":"48cf358a-a837-41bd-a27c-f01577af8bad","type":"Panel"},{"id":"afec4d7d-25f9-43ee-8a72-5c36b800acfc","type":"Panel"}]},"id":"316e854e-07b3-4f5c-b977-805bc5a4964a","type":"Tabs"},{"attributes":{"formatter":{"id":"e9128c60-2b5c-4025-bebe-3a99ac0b43ab","type":"BasicTickFormatter"},"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"},"ticker":{"id":"52bbb813-c010-4dbf-ba10-3d5423ec8ae7","type":"BasicTicker"}},"id":"90322b45-9168-473c-a28b-7ceeeca11a20","type":"LinearAxis"},{"attributes":{},"id":"17d79e6b-044c-4278-813b-7ee11a235c14","type":"ToolEvents"},{"attributes":{"below":[{"id":"2178f408-2f93-4e35-84ad-250e641918dc","type":"LinearAxis"}],"left":[{"id":"1ed9466d-0607-4a75-bd7e-585aaafd966a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"2178f408-2f93-4e35-84ad-250e641918dc","type":"LinearAxis"},{"id":"7d00e875-cb2b-40e6-8936-55bfc5c984cc","type":"Grid"},{"id":"1ed9466d-0607-4a75-bd7e-585aaafd966a","type":"LinearAxis"},{"id":"6ba55db5-b52b-4107-9e0b-45afe09ddab1","type":"Grid"},{"id":"ed90a5de-7027-4eb7-acdc-88f1cf64aeb8","type":"BoxAnnotation"},{"id":"87b69667-d534-466d-afe8-27a60712fb16","type":"GlyphRenderer"}],"title":{"id":"c345c109-15b3-494e-9893-9d4e63a20c0f","type":"Title"},"tool_events":{"id":"17d79e6b-044c-4278-813b-7ee11a235c14","type":"ToolEvents"},"toolbar":{"id":"375379c3-8620-4c8c-9d69-4077968523bd","type":"Toolbar"},"x_range":{"id":"ecf4f2f5-cdb1-4d7d-8b22-8abfd32396fe","type":"DataRange1d"},"y_range":{"id":"7aa7c86c-1360-40f3-80d5-38f5fbefd99d","type":"DataRange1d"}},"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"ecf4f2f5-cdb1-4d7d-8b22-8abfd32396fe","type":"DataRange1d"},{"attributes":{"callback":null},"id":"23574094-1ecf-44d9-8f2f-59c61b784525","type":"DataRange1d"},{"attributes":{"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"}},"id":"cc4764d2-cd25-4064-9cfa-af81d5648cb9","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc703de1-a505-452f-99b6-9152b6de4d82","type":"BasicTicker"}},"id":"6ba55db5-b52b-4107-9e0b-45afe09ddab1","type":"Grid"},{"attributes":{"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"}},"id":"257a6236-18d4-44d1-9e08-a5746752a522","type":"PanTool"},{"attributes":{},"id":"bdfd001a-119c-4f2d-9994-9f210aca6ff9","type":"ToolEvents"},{"attributes":{"data_source":{"id":"0096793e-04f2-470d-9e1b-43be9d4b1fc4","type":"ColumnDataSource"},"glyph":{"id":"b2d5e565-0da5-464a-b0f0-a462214e6e94","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d2d4ffe5-ab20-41c0-ac48-041473d46c90","type":"Circle"},"selection_glyph":null},"id":"87b69667-d534-466d-afe8-27a60712fb16","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d38edf17-1f98-4cdb-9438-cf363d052266","type":"PanTool"},{"id":"4c911e1b-3ed5-4f5a-8b1b-8bd8509f58a5","type":"WheelZoomTool"},{"id":"b36fc4b5-9bfa-4063-ba62-00cebde1c1db","type":"BoxZoomTool"},{"id":"8ed57b17-1c5f-404c-b195-c3653ad5c79e","type":"SaveTool"},{"id":"eec6e581-67af-4718-a665-45a4313f5838","type":"ResetTool"},{"id":"cc4764d2-cd25-4064-9cfa-af81d5648cb9","type":"HelpTool"}]},"id":"07eb1753-f3dd-4bbe-96bd-c4563499825f","type":"Toolbar"},{"attributes":{"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"}},"id":"ee5b40f9-97c6-4994-ae95-bd35cdb9d151","type":"ResetTool"},{"attributes":{},"id":"e9128c60-2b5c-4025-bebe-3a99ac0b43ab","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"692f8315-634f-436a-8f14-1d2c2b290902","type":"ColumnDataSource"},{"attributes":{},"id":"fc703de1-a505-452f-99b6-9152b6de4d82","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"257a6236-18d4-44d1-9e08-a5746752a522","type":"PanTool"},{"id":"93e2f417-df8d-4e5e-891c-eb58499c59f0","type":"WheelZoomTool"},{"id":"8caacd5c-8d79-4ab0-b573-3ca3b0ad0ad6","type":"BoxZoomTool"},{"id":"d61244a4-5da6-4838-b39c-8218ab7e0ddc","type":"SaveTool"},{"id":"ee5b40f9-97c6-4994-ae95-bd35cdb9d151","type":"ResetTool"},{"id":"ca0cfba6-223f-477f-ae89-85b6e1d433a7","type":"HelpTool"}]},"id":"375379c3-8620-4c8c-9d69-4077968523bd","type":"Toolbar"},{"attributes":{},"id":"eab9e3df-97f7-4135-8762-328a0250436e","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ed90a5de-7027-4eb7-acdc-88f1cf64aeb8","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"},"ticker":{"id":"112b82fc-970d-4eba-823d-462b12069f93","type":"BasicTicker"}},"id":"7d00e875-cb2b-40e6-8936-55bfc5c984cc","type":"Grid"},{"attributes":{},"id":"8a675407-533b-4f39-b434-ce8773baa4ab","type":"BasicTickFormatter"},{"attributes":{},"id":"112b82fc-970d-4eba-823d-462b12069f93","type":"BasicTicker"},{"attributes":{"below":[{"id":"90322b45-9168-473c-a28b-7ceeeca11a20","type":"LinearAxis"}],"left":[{"id":"b34374a9-c6f8-435d-93e9-2ec2f2567fcb","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"90322b45-9168-473c-a28b-7ceeeca11a20","type":"LinearAxis"},{"id":"7b857149-183e-49fe-a384-0bad722aca6a","type":"Grid"},{"id":"b34374a9-c6f8-435d-93e9-2ec2f2567fcb","type":"LinearAxis"},{"id":"10633165-e6a2-46bf-b32a-ae7ec6733677","type":"Grid"},{"id":"9acf2827-c05b-4ce8-aa67-46a509da4902","type":"BoxAnnotation"},{"id":"ecf5e2c2-f1ba-49d9-b771-39efa3e32444","type":"GlyphRenderer"}],"title":{"id":"949a6f46-8794-457b-9a2c-049e0b7b834c","type":"Title"},"tool_events":{"id":"bdfd001a-119c-4f2d-9994-9f210aca6ff9","type":"ToolEvents"},"toolbar":{"id":"07eb1753-f3dd-4bbe-96bd-c4563499825f","type":"Toolbar"},"x_range":{"id":"23574094-1ecf-44d9-8f2f-59c61b784525","type":"DataRange1d"},"y_range":{"id":"6384bfd5-3544-4582-b9f5-99be9c8b3487","type":"DataRange1d"}},"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"0096793e-04f2-470d-9e1b-43be9d4b1fc4","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"}},"id":"ca0cfba6-223f-477f-ae89-85b6e1d433a7","type":"HelpTool"},{"attributes":{"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"}},"id":"8ed57b17-1c5f-404c-b195-c3653ad5c79e","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9acf2827-c05b-4ce8-aa67-46a509da4902","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"343480f7-fa05-4f13-9c56-0052305e06a4","subtype":"Figure","type":"Plot"}},"id":"93e2f417-df8d-4e5e-891c-eb58499c59f0","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"9acf2827-c05b-4ce8-aa67-46a509da4902","type":"BoxAnnotation"},"plot":{"id":"a3129425-560b-4af0-863c-4c81a2ffdd20","subtype":"Figure","type":"Plot"}},"id":"b36fc4b5-9bfa-4063-ba62-00cebde1c1db","type":"BoxZoomTool"},{"attributes":{},"id":"a2d16466-01dd-4a85-af88-443da29488be","type":"BasicTickFormatter"},{"attributes":{},"id":"9b7683bb-906b-4ddb-a63d-c14ebc7d807f","type":"BasicTickFormatter"}],"root_ids":["316e854e-07b3-4f5c-b977-805bc5a4964a"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"af08f654-96c3-419d-957a-f43a0cb4cda4","elementid":"8f087e49-fd49-4b70-b336-4855c52d126f","modelid":"316e854e-07b3-4f5c-b977-805bc5a4964a"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
