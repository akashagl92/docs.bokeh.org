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
      };var element = document.getElementById("d06a4d7e-2997-44f0-9fde-cedcce25d451");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd06a4d7e-2997-44f0-9fde-cedcce25d451' but no matching script tag was found. ")
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
                var docs_json = {"54d2f341-ff6d-41c1-83ef-e1a63e6ef5b2":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e655e4b3-d716-4c15-b4ac-4575fd984b51","type":"PanTool"},{"id":"86bb577c-b6d4-42b8-85f9-85ff5fb32c9f","type":"WheelZoomTool"},{"id":"ad4ed3da-08b7-4ae6-8f77-aef047d1a804","type":"BoxZoomTool"},{"id":"81dc4a6b-4452-4a5b-bff2-d682ecfd883d","type":"SaveTool"},{"id":"aac04c83-e4e9-448a-90ef-01c4d4d8fcb3","type":"ResetTool"},{"id":"ce0a3c0e-7017-42a1-89b0-e3cf238a5d06","type":"HelpTool"}]},"id":"3caa49cb-ab1c-4901-97b5-68c26dcde1b1","type":"Toolbar"},{"attributes":{"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5060baeb-c6f4-40c1-a91a-d8c1a1561e26","type":"BasicTicker"}},"id":"c0541ef6-81c2-4b16-9857-3c90245a5f43","type":"Grid"},{"attributes":{"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"}},"id":"aac04c83-e4e9-448a-90ef-01c4d4d8fcb3","type":"ResetTool"},{"attributes":{"below":[{"id":"fc19ec6f-e91c-49fd-866c-3be1ed9f1744","type":"LinearAxis"}],"left":[{"id":"079b90e4-a742-468e-aaa7-c5bdc6b2afc2","type":"CategoricalAxis"}],"renderers":[{"id":"fc19ec6f-e91c-49fd-866c-3be1ed9f1744","type":"LinearAxis"},{"id":"c0541ef6-81c2-4b16-9857-3c90245a5f43","type":"Grid"},{"id":"079b90e4-a742-468e-aaa7-c5bdc6b2afc2","type":"CategoricalAxis"},{"id":"2e664709-7fbf-4cd7-b0de-7c2375d301e9","type":"Grid"},{"id":"f846888a-0d9a-4929-8f92-413114698f41","type":"BoxAnnotation"},{"id":"2e350b19-a783-44c6-a2f0-833c9b0b9bc6","type":"GlyphRenderer"}],"title":{"id":"43bc8275-2306-4868-9af0-e522090a233b","type":"Title"},"tool_events":{"id":"d18a13e2-9fa3-4aab-a179-1f9fd2a0c319","type":"ToolEvents"},"toolbar":{"id":"3caa49cb-ab1c-4901-97b5-68c26dcde1b1","type":"Toolbar"},"x_range":{"id":"5239fcb9-62f1-4be7-8b8a-8fbf596e5109","type":"DataRange1d"},"y_range":{"id":"ea81c302-56bf-4582-953f-b851f660b46f","type":"FactorRange"}},"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"9f28e0b0-6e47-4ad1-aa59-318a495c4103","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"4138bd43-a1f6-4f68-b46c-ab26156425ff","type":"BasicTickFormatter"},"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5060baeb-c6f4-40c1-a91a-d8c1a1561e26","type":"BasicTicker"}},"id":"fc19ec6f-e91c-49fd-866c-3be1ed9f1744","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"ddcfd79e-07ac-4845-a8fb-7f95a68ee368","type":"Circle"},{"attributes":{"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"}},"id":"86bb577c-b6d4-42b8-85f9-85ff5fb32c9f","type":"WheelZoomTool"},{"attributes":{},"id":"4138bd43-a1f6-4f68-b46c-ab26156425ff","type":"BasicTickFormatter"},{"attributes":{},"id":"d18a13e2-9fa3-4aab-a179-1f9fd2a0c319","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"43bc8275-2306-4868-9af0-e522090a233b","type":"Title"},{"attributes":{"callback":null},"id":"5239fcb9-62f1-4be7-8b8a-8fbf596e5109","type":"DataRange1d"},{"attributes":{"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"}},"id":"e655e4b3-d716-4c15-b4ac-4575fd984b51","type":"PanTool"},{"attributes":{},"id":"ce856750-8cc6-4eed-8813-5c7cd7d582fb","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"}},"id":"81dc4a6b-4452-4a5b-bff2-d682ecfd883d","type":"SaveTool"},{"attributes":{"formatter":{"id":"d85fb366-ce30-4578-8712-e758de301b75","type":"CategoricalTickFormatter"},"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce856750-8cc6-4eed-8813-5c7cd7d582fb","type":"CategoricalTicker"}},"id":"079b90e4-a742-468e-aaa7-c5bdc6b2afc2","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"}},"id":"ce0a3c0e-7017-42a1-89b0-e3cf238a5d06","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce856750-8cc6-4eed-8813-5c7cd7d582fb","type":"CategoricalTicker"}},"id":"2e664709-7fbf-4cd7-b0de-7c2375d301e9","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f846888a-0d9a-4929-8f92-413114698f41","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"9e266cdd-ccc5-472f-a1a4-d1b4c2ba6365","type":"Circle"},{"attributes":{"data_source":{"id":"9f28e0b0-6e47-4ad1-aa59-318a495c4103","type":"ColumnDataSource"},"glyph":{"id":"9e266cdd-ccc5-472f-a1a4-d1b4c2ba6365","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ddcfd79e-07ac-4845-a8fb-7f95a68ee368","type":"Circle"},"selection_glyph":null},"id":"2e350b19-a783-44c6-a2f0-833c9b0b9bc6","type":"GlyphRenderer"},{"attributes":{},"id":"d85fb366-ce30-4578-8712-e758de301b75","type":"CategoricalTickFormatter"},{"attributes":{},"id":"5060baeb-c6f4-40c1-a91a-d8c1a1561e26","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"ea81c302-56bf-4582-953f-b851f660b46f","type":"FactorRange"},{"attributes":{"overlay":{"id":"f846888a-0d9a-4929-8f92-413114698f41","type":"BoxAnnotation"},"plot":{"id":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e","subtype":"Figure","type":"Plot"}},"id":"ad4ed3da-08b7-4ae6-8f77-aef047d1a804","type":"BoxZoomTool"}],"root_ids":["ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"54d2f341-ff6d-41c1-83ef-e1a63e6ef5b2","elementid":"d06a4d7e-2997-44f0-9fde-cedcce25d451","modelid":"ab2e1ffa-3aca-4f58-b5a9-bee83c8b9c6e"}];
                
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
