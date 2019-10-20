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
      };var element = document.getElementById("3d78649f-086d-45b5-822d-3d5599aefd44");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3d78649f-086d-45b5-822d-3d5599aefd44' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"53fb2819-7c0e-4b3d-a6bd-5c4f8f23afe0":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc5bbb7f-b0f7-4c91-9f21-70da9029b2b3","type":"BasicTicker"}},"id":"331c0496-fab8-446f-8c15-015ddb8835df","type":"Grid"},{"attributes":{"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"}},"id":"0f617950-0271-4391-acb4-b5983bb3bd70","type":"HelpTool"},{"attributes":{},"id":"9be3cc74-7ec1-4828-9ccd-147e684eaf9d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"}},"id":"7750a30b-4e4f-4c39-afc5-48b48cc0a417","type":"SaveTool"},{"attributes":{},"id":"c5035bc3-5eb1-4a59-a190-aa61abbbcc52","type":"BasicTicker"},{"attributes":{"data_source":{"id":"ce9f7b01-ac95-4f03-931d-e47fc4cbd472","type":"ColumnDataSource"},"glyph":{"id":"3720da9a-b415-493c-badd-af10342548e5","type":"Cross"},"hover_glyph":null,"nonselection_glyph":{"id":"d1acd609-dba8-40db-89ec-faa5c5854e87","type":"Cross"},"selection_glyph":null},"id":"9ef20aaf-03ff-465f-bee6-d4cb6e1a9086","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"be13ba38-546f-4c2b-8a16-28a7df6947ac","type":"LinearAxis"}],"left":[{"id":"1daaef06-adce-4988-bef4-977fca0f1945","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"be13ba38-546f-4c2b-8a16-28a7df6947ac","type":"LinearAxis"},{"id":"05742bed-6b8e-4520-a72c-4363fded8b66","type":"Grid"},{"id":"1daaef06-adce-4988-bef4-977fca0f1945","type":"LinearAxis"},{"id":"331c0496-fab8-446f-8c15-015ddb8835df","type":"Grid"},{"id":"6dd96592-3033-4770-aab8-c75d6dcd5d5c","type":"BoxAnnotation"},{"id":"9ef20aaf-03ff-465f-bee6-d4cb6e1a9086","type":"GlyphRenderer"}],"title":{"id":"785bdb66-7230-4305-b4da-332613ab5143","type":"Title"},"tool_events":{"id":"129eeb03-f7f1-4114-84be-1e548a9cf6c5","type":"ToolEvents"},"toolbar":{"id":"6722ef3a-aa51-49f2-8427-6075ed0e9d0d","type":"Toolbar"},"x_range":{"id":"7988cc90-ffa4-485a-b8a0-40715f955a84","type":"DataRange1d"},"y_range":{"id":"0a4cabea-2833-4396-99f2-aa60e8640bda","type":"DataRange1d"}},"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1acd609-dba8-40db-89ec-faa5c5854e87","type":"Cross"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6dd96592-3033-4770-aab8-c75d6dcd5d5c","type":"BoxAnnotation"},{"attributes":{},"id":"fc5bbb7f-b0f7-4c91-9f21-70da9029b2b3","type":"BasicTicker"},{"attributes":{"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"}},"id":"0f5263e7-fac5-4d9b-9fbc-1005d06396fb","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2978e34c-192d-4012-af45-289b7fe387cb","type":"PanTool"},{"id":"9cc81018-a9c4-4956-8b24-a55bc8f38e37","type":"WheelZoomTool"},{"id":"0c2d2002-e1e3-4393-8672-36fd5f825ee8","type":"BoxZoomTool"},{"id":"7750a30b-4e4f-4c39-afc5-48b48cc0a417","type":"SaveTool"},{"id":"0f5263e7-fac5-4d9b-9fbc-1005d06396fb","type":"ResetTool"},{"id":"0f617950-0271-4391-acb4-b5983bb3bd70","type":"HelpTool"}]},"id":"6722ef3a-aa51-49f2-8427-6075ed0e9d0d","type":"Toolbar"},{"attributes":{"overlay":{"id":"6dd96592-3033-4770-aab8-c75d6dcd5d5c","type":"BoxAnnotation"},"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"}},"id":"0c2d2002-e1e3-4393-8672-36fd5f825ee8","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ce9f7b01-ac95-4f03-931d-e47fc4cbd472","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"40274d1b-6af0-42d2-8493-6605997d6519","type":"BasicTickFormatter"},"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5035bc3-5eb1-4a59-a190-aa61abbbcc52","type":"BasicTicker"}},"id":"be13ba38-546f-4c2b-8a16-28a7df6947ac","type":"LinearAxis"},{"attributes":{"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5035bc3-5eb1-4a59-a190-aa61abbbcc52","type":"BasicTicker"}},"id":"05742bed-6b8e-4520-a72c-4363fded8b66","type":"Grid"},{"attributes":{},"id":"40274d1b-6af0-42d2-8493-6605997d6519","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"9be3cc74-7ec1-4828-9ccd-147e684eaf9d","type":"BasicTickFormatter"},"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"},"ticker":{"id":"fc5bbb7f-b0f7-4c91-9f21-70da9029b2b3","type":"BasicTicker"}},"id":"1daaef06-adce-4988-bef4-977fca0f1945","type":"LinearAxis"},{"attributes":{"callback":null},"id":"7988cc90-ffa4-485a-b8a0-40715f955a84","type":"DataRange1d"},{"attributes":{"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"}},"id":"2978e34c-192d-4012-af45-289b7fe387cb","type":"PanTool"},{"attributes":{"callback":null},"id":"0a4cabea-2833-4396-99f2-aa60e8640bda","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3720da9a-b415-493c-badd-af10342548e5","type":"Cross"},{"attributes":{"plot":{"id":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8","subtype":"Figure","type":"Plot"}},"id":"9cc81018-a9c4-4956-8b24-a55bc8f38e37","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"785bdb66-7230-4305-b4da-332613ab5143","type":"Title"},{"attributes":{},"id":"129eeb03-f7f1-4114-84be-1e548a9cf6c5","type":"ToolEvents"}],"root_ids":["bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"53fb2819-7c0e-4b3d-a6bd-5c4f8f23afe0","elementid":"3d78649f-086d-45b5-822d-3d5599aefd44","modelid":"bff2bcfa-0844-4aa1-b6eb-111ef59b9dd8"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
