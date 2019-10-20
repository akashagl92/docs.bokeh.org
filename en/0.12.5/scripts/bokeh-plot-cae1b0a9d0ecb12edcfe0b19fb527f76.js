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
      };var element = document.getElementById("0a0cb541-9581-4e52-8ff7-0acb22ab18df");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0a0cb541-9581-4e52-8ff7-0acb22ab18df' but no matching script tag was found. ")
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
                var docs_json = {"77b15eac-3eed-4ca4-b460-b089eb3cfc5f":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7dc6336-8cfb-4dd4-aeec-f59b619a7225","type":"Circle"},{"attributes":{},"id":"5575819e-e489-420c-91bf-7f2f6b549734","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b4c91eb8-5ed8-4ac6-bd8d-49102705e617","type":"Circle"},{"attributes":{"formatter":{"id":"2010ee3f-68f0-4508-b486-875001d1a6e3","type":"BasicTickFormatter"},"major_tick_line_color":{"value":"firebrick"},"major_tick_line_width":{"value":3},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":"orange"},"minor_tick_out":8,"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b41d131-4ed7-4281-a79c-1c4724eaf861","type":"BasicTicker"}},"id":"f2f10142-729d-4c2c-a3e1-ee3706977687","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"},"ticker":{"id":"4baffd5f-d196-4d17-aba5-13e19fc4c624","type":"BasicTicker"}},"id":"52a40ddc-a9d0-46cf-b29d-2230715d899f","type":"Grid"},{"attributes":{"formatter":{"id":"014be31e-f81b-4a77-b17f-8c12bf3f6168","type":"BasicTickFormatter"},"major_tick_out":10,"minor_tick_in":-3,"minor_tick_line_color":{"value":null},"minor_tick_out":8,"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"},"ticker":{"id":"4baffd5f-d196-4d17-aba5-13e19fc4c624","type":"BasicTicker"}},"id":"3c020a94-644b-45b2-b5af-cc8e5f7075ca","type":"LinearAxis"},{"attributes":{"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"}},"id":"4d359bb7-7a97-411f-95c2-b57ec506bfe2","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b41d131-4ed7-4281-a79c-1c4724eaf861","type":"BasicTicker"}},"id":"aa4a4c51-232f-416f-a0e9-1798d125cb0a","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"74086898-9160-4e0c-992e-f99dcdf6ea06","type":"Title"},{"attributes":{"overlay":{"id":"0c6e9687-f206-4fe9-b57d-d7ef52f8c2f8","type":"BoxAnnotation"},"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"}},"id":"889882f0-d4a7-45dc-a93a-861e05fdf629","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"}},"id":"794ba627-d94d-46b6-9e40-dcdb4dbdb157","type":"ResetTool"},{"attributes":{"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"}},"id":"de1f7618-d353-41d5-9170-c3003d7631d3","type":"SaveTool"},{"attributes":{"callback":null},"id":"770168ad-cfbe-4599-9a63-d2089239fcc3","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"89767787-9b75-4ef8-b7bd-5b1e26ba718b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"}},"id":"1fee5e64-39c1-4e69-8e30-9cbf685f5ba2","type":"PanTool"},{"attributes":{},"id":"4baffd5f-d196-4d17-aba5-13e19fc4c624","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0c6e9687-f206-4fe9-b57d-d7ef52f8c2f8","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"f2f10142-729d-4c2c-a3e1-ee3706977687","type":"LinearAxis"}],"left":[{"id":"3c020a94-644b-45b2-b5af-cc8e5f7075ca","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"f2f10142-729d-4c2c-a3e1-ee3706977687","type":"LinearAxis"},{"id":"aa4a4c51-232f-416f-a0e9-1798d125cb0a","type":"Grid"},{"id":"3c020a94-644b-45b2-b5af-cc8e5f7075ca","type":"LinearAxis"},{"id":"52a40ddc-a9d0-46cf-b29d-2230715d899f","type":"Grid"},{"id":"0c6e9687-f206-4fe9-b57d-d7ef52f8c2f8","type":"BoxAnnotation"},{"id":"d36fbe38-c6d5-474b-bcb0-7cb70fb8dddb","type":"GlyphRenderer"}],"title":{"id":"74086898-9160-4e0c-992e-f99dcdf6ea06","type":"Title"},"tool_events":{"id":"5575819e-e489-420c-91bf-7f2f6b549734","type":"ToolEvents"},"toolbar":{"id":"a3a0f499-f55b-4fbf-8ef6-5ec3e79c7d1a","type":"Toolbar"},"x_range":{"id":"770168ad-cfbe-4599-9a63-d2089239fcc3","type":"DataRange1d"},"y_range":{"id":"27f8f1bb-b2fc-4704-948c-fea79131384e","type":"DataRange1d"}},"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1fee5e64-39c1-4e69-8e30-9cbf685f5ba2","type":"PanTool"},{"id":"4d359bb7-7a97-411f-95c2-b57ec506bfe2","type":"WheelZoomTool"},{"id":"889882f0-d4a7-45dc-a93a-861e05fdf629","type":"BoxZoomTool"},{"id":"de1f7618-d353-41d5-9170-c3003d7631d3","type":"SaveTool"},{"id":"794ba627-d94d-46b6-9e40-dcdb4dbdb157","type":"ResetTool"},{"id":"60bbd643-9ad8-4dab-b099-aabe8989cc9b","type":"HelpTool"}]},"id":"a3a0f499-f55b-4fbf-8ef6-5ec3e79c7d1a","type":"Toolbar"},{"attributes":{"callback":null},"id":"27f8f1bb-b2fc-4704-948c-fea79131384e","type":"DataRange1d"},{"attributes":{"plot":{"id":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34","subtype":"Figure","type":"Plot"}},"id":"60bbd643-9ad8-4dab-b099-aabe8989cc9b","type":"HelpTool"},{"attributes":{},"id":"014be31e-f81b-4a77-b17f-8c12bf3f6168","type":"BasicTickFormatter"},{"attributes":{},"id":"7b41d131-4ed7-4281-a79c-1c4724eaf861","type":"BasicTicker"},{"attributes":{},"id":"2010ee3f-68f0-4508-b486-875001d1a6e3","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"89767787-9b75-4ef8-b7bd-5b1e26ba718b","type":"ColumnDataSource"},"glyph":{"id":"b4c91eb8-5ed8-4ac6-bd8d-49102705e617","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a7dc6336-8cfb-4dd4-aeec-f59b619a7225","type":"Circle"},"selection_glyph":null},"id":"d36fbe38-c6d5-474b-bcb0-7cb70fb8dddb","type":"GlyphRenderer"}],"root_ids":["8218ce1f-3b1a-48ff-b36f-0d9af9783f34"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"77b15eac-3eed-4ca4-b460-b089eb3cfc5f","elementid":"0a0cb541-9581-4e52-8ff7-0acb22ab18df","modelid":"8218ce1f-3b1a-48ff-b36f-0d9af9783f34"}];
                
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
