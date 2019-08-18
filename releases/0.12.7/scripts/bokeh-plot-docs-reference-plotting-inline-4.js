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
      };var element = document.getElementById("f7c51518-4e5e-42ff-b38b-bafdcdc79d3e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f7c51518-4e5e-42ff-b38b-bafdcdc79d3e' but no matching script tag was found. ")
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
                var docs_json = {"3cc064c4-bbc4-4e5f-b165-76ae77687621":{"roots":{"references":[{"attributes":{"callback":null},"id":"339161e0-3f35-4829-b1cb-a5d57b7d6901","type":"DataRange1d"},{"attributes":{"below":[{"id":"efb5998f-ab67-457b-8a85-9978907c5a7a","type":"LinearAxis"}],"left":[{"id":"6a4afb91-edc4-4bbf-b937-06cc9c03aad4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"efb5998f-ab67-457b-8a85-9978907c5a7a","type":"LinearAxis"},{"id":"6b102171-930b-41d3-9547-217abdf602bc","type":"Grid"},{"id":"6a4afb91-edc4-4bbf-b937-06cc9c03aad4","type":"LinearAxis"},{"id":"f6ae54ec-89ba-476c-beeb-42f01dcf17f0","type":"Grid"},{"id":"aeae1017-228c-4f9b-bd24-5e7082fba2ad","type":"BoxAnnotation"},{"id":"068519c4-4d25-4716-b95b-5f4d6aa87943","type":"GlyphRenderer"}],"title":{"id":"5e875777-c365-4962-92bd-458a736fb354","type":"Title"},"toolbar":{"id":"4a337808-7993-461e-a730-f7d7b509ba85","type":"Toolbar"},"x_range":{"id":"e077bb14-7507-4e8a-a3a6-fdb3b50ee15c","type":"DataRange1d"},"x_scale":{"id":"2dd818e6-4b37-499a-ae84-dbec79983d9b","type":"LinearScale"},"y_range":{"id":"339161e0-3f35-4829-b1cb-a5d57b7d6901","type":"DataRange1d"},"y_scale":{"id":"b6996cab-b5b4-421b-89e7-dd2f4922b68c","type":"LinearScale"}},"id":"49234f1e-e10b-48ad-bb68-178171513a0f","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"ad43e9d9-2364-4b53-9711-d6b78e42fe0f","type":"ColumnDataSource"},"glyph":{"id":"78e1a737-ccaf-414f-9a31-443cfee365d1","type":"CircleX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2b5e0584-52d6-4b65-b426-800180546f6b","type":"CircleX"},"selection_glyph":null,"view":{"id":"a9b70288-088b-4a59-8ad6-aca6f9b43341","type":"CDSView"}},"id":"068519c4-4d25-4716-b95b-5f4d6aa87943","type":"GlyphRenderer"},{"attributes":{},"id":"a488990a-312e-447b-97ba-6ca4002bead3","type":"SaveTool"},{"attributes":{"overlay":{"id":"aeae1017-228c-4f9b-bd24-5e7082fba2ad","type":"BoxAnnotation"}},"id":"6610e300-994a-4347-bebf-7ddc6c699d30","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9ac64c29-7c33-434b-951b-cb63de03c185","type":"PanTool"},{"id":"c7027f0b-ac66-47bb-9016-1dbdab8e2464","type":"WheelZoomTool"},{"id":"6610e300-994a-4347-bebf-7ddc6c699d30","type":"BoxZoomTool"},{"id":"a488990a-312e-447b-97ba-6ca4002bead3","type":"SaveTool"},{"id":"70a6aace-22c5-4a66-b050-fa9e27c7fb8b","type":"ResetTool"},{"id":"fcfc47b7-8737-4ab5-a4a4-c64fd7c29c4f","type":"HelpTool"}]},"id":"4a337808-7993-461e-a730-f7d7b509ba85","type":"Toolbar"},{"attributes":{"callback":null},"id":"e077bb14-7507-4e8a-a3a6-fdb3b50ee15c","type":"DataRange1d"},{"attributes":{"plot":null,"text":""},"id":"5e875777-c365-4962-92bd-458a736fb354","type":"Title"},{"attributes":{},"id":"fcfc47b7-8737-4ab5-a4a4-c64fd7c29c4f","type":"HelpTool"},{"attributes":{"formatter":{"id":"a642605f-c5f5-4ece-8348-7fe9f151b02a","type":"BasicTickFormatter"},"plot":{"id":"49234f1e-e10b-48ad-bb68-178171513a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"87dfc84e-a68e-4865-a96a-d1de24e46afd","type":"BasicTicker"}},"id":"6a4afb91-edc4-4bbf-b937-06cc9c03aad4","type":"LinearAxis"},{"attributes":{"plot":{"id":"49234f1e-e10b-48ad-bb68-178171513a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee371a00-4d36-4395-8203-9621c08d94d7","type":"BasicTicker"}},"id":"6b102171-930b-41d3-9547-217abdf602bc","type":"Grid"},{"attributes":{},"id":"87dfc84e-a68e-4865-a96a-d1de24e46afd","type":"BasicTicker"},{"attributes":{},"id":"2dd818e6-4b37-499a-ae84-dbec79983d9b","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#DD1C77"},"line_color":{"value":"#DD1C77"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"78e1a737-ccaf-414f-9a31-443cfee365d1","type":"CircleX"},{"attributes":{},"id":"b6996cab-b5b4-421b-89e7-dd2f4922b68c","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b5e0584-52d6-4b65-b426-800180546f6b","type":"CircleX"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ad43e9d9-2364-4b53-9711-d6b78e42fe0f","type":"ColumnDataSource"},{"attributes":{},"id":"9ac64c29-7c33-434b-951b-cb63de03c185","type":"PanTool"},{"attributes":{},"id":"a642605f-c5f5-4ece-8348-7fe9f151b02a","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"ad43e9d9-2364-4b53-9711-d6b78e42fe0f","type":"ColumnDataSource"}},"id":"a9b70288-088b-4a59-8ad6-aca6f9b43341","type":"CDSView"},{"attributes":{},"id":"c7027f0b-ac66-47bb-9016-1dbdab8e2464","type":"WheelZoomTool"},{"attributes":{},"id":"ee371a00-4d36-4395-8203-9621c08d94d7","type":"BasicTicker"},{"attributes":{},"id":"70a6aace-22c5-4a66-b050-fa9e27c7fb8b","type":"ResetTool"},{"attributes":{"formatter":{"id":"77010450-e479-45a2-a3fa-f2014b8f3dfe","type":"BasicTickFormatter"},"plot":{"id":"49234f1e-e10b-48ad-bb68-178171513a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee371a00-4d36-4395-8203-9621c08d94d7","type":"BasicTicker"}},"id":"efb5998f-ab67-457b-8a85-9978907c5a7a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"49234f1e-e10b-48ad-bb68-178171513a0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"87dfc84e-a68e-4865-a96a-d1de24e46afd","type":"BasicTicker"}},"id":"f6ae54ec-89ba-476c-beeb-42f01dcf17f0","type":"Grid"},{"attributes":{},"id":"77010450-e479-45a2-a3fa-f2014b8f3dfe","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aeae1017-228c-4f9b-bd24-5e7082fba2ad","type":"BoxAnnotation"}],"root_ids":["49234f1e-e10b-48ad-bb68-178171513a0f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"3cc064c4-bbc4-4e5f-b165-76ae77687621","elementid":"f7c51518-4e5e-42ff-b38b-bafdcdc79d3e","modelid":"49234f1e-e10b-48ad-bb68-178171513a0f"}];
                
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
