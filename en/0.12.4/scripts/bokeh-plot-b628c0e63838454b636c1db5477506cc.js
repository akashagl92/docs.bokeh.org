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
      };var element = document.getElementById("c4a3a854-3f91-4a1d-81e4-4c2019c3a82b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c4a3a854-3f91-4a1d-81e4-4c2019c3a82b' but no matching script tag was found. ")
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
                var docs_json = {"ae87f171-a8c7-4ae2-b4eb-8de747d773e9":{"roots":{"references":[{"attributes":{"data_source":{"id":"1a1cd5b4-ae7d-494d-b98c-648fb7606b12","type":"ColumnDataSource"},"glyph":{"id":"d355ac17-249e-490b-bd9d-1251181905d4","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7674f8cd-135e-437a-b478-9881571b1cfb","type":"Circle"},"selection_glyph":null},"id":"cf3eac93-bb19-446b-aed1-337d4591c3d0","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d995e375-ee87-49d6-95ad-839cce1c37c3","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"55bd3f8d-7276-4e58-a9d5-786c81e35044","type":"DataRange1d"},{"attributes":{"dimension":1,"minor_grid_line_alpha":{"value":0.1},"minor_grid_line_color":{"value":"navy"},"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"},"ticker":{"id":"0ee89f78-25dd-4a5d-a111-08354fc83f2b","type":"BasicTicker"}},"id":"c18a6e76-d32e-456a-88ef-a247b9541bee","type":"Grid"},{"attributes":{},"id":"0ee89f78-25dd-4a5d-a111-08354fc83f2b","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"357a32cf-e5bd-4476-876f-ef2e8a6283b0","type":"Title"},{"attributes":{},"id":"f03acfd4-2ea8-46d3-ba9c-94296b5a6b16","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"d995e375-ee87-49d6-95ad-839cce1c37c3","type":"BoxAnnotation"},"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"}},"id":"e63e2db3-5781-4029-96bf-eabbddeeb1a5","type":"BoxZoomTool"},{"attributes":{},"id":"47923893-af89-4298-9379-c004daae6878","type":"ToolEvents"},{"attributes":{"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"}},"id":"49002062-1375-4b66-9d69-8cbc9528b906","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"c62fd392-c8ce-41ed-9150-967bc0c43561","type":"BasicTickFormatter"},"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"},"ticker":{"id":"051df30e-4a98-4596-a9eb-48eb11395ff6","type":"BasicTicker"}},"id":"12020ec8-4570-432c-8221-5345ececf606","type":"LinearAxis"},{"attributes":{"below":[{"id":"12020ec8-4570-432c-8221-5345ececf606","type":"LinearAxis"}],"left":[{"id":"1fe5f01b-a283-4df5-aaf7-07c593280210","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12020ec8-4570-432c-8221-5345ececf606","type":"LinearAxis"},{"id":"09e0045e-0c10-4df4-9ab0-1b23f30f22b8","type":"Grid"},{"id":"1fe5f01b-a283-4df5-aaf7-07c593280210","type":"LinearAxis"},{"id":"c18a6e76-d32e-456a-88ef-a247b9541bee","type":"Grid"},{"id":"d995e375-ee87-49d6-95ad-839cce1c37c3","type":"BoxAnnotation"},{"id":"cf3eac93-bb19-446b-aed1-337d4591c3d0","type":"GlyphRenderer"}],"title":{"id":"357a32cf-e5bd-4476-876f-ef2e8a6283b0","type":"Title"},"tool_events":{"id":"47923893-af89-4298-9379-c004daae6878","type":"ToolEvents"},"toolbar":{"id":"4beb224d-160a-4d5e-9848-94dcb03201b4","type":"Toolbar"},"x_range":{"id":"7d4b603a-a9ad-4012-a9e3-1670eaeca0da","type":"DataRange1d"},"y_range":{"id":"55bd3f8d-7276-4e58-a9d5-786c81e35044","type":"DataRange1d"}},"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c62fd392-c8ce-41ed-9150-967bc0c43561","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"1a1cd5b4-ae7d-494d-b98c-648fb7606b12","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"},"ticker":{"id":"051df30e-4a98-4596-a9eb-48eb11395ff6","type":"BasicTicker"}},"id":"09e0045e-0c10-4df4-9ab0-1b23f30f22b8","type":"Grid"},{"attributes":{},"id":"051df30e-4a98-4596-a9eb-48eb11395ff6","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7d4b603a-a9ad-4012-a9e3-1670eaeca0da","type":"DataRange1d"},{"attributes":{"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"}},"id":"00f5286a-51ed-4f8b-9704-c4152c18829d","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7674f8cd-135e-437a-b478-9881571b1cfb","type":"Circle"},{"attributes":{"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"}},"id":"8e162b58-acb4-4ee7-a940-acaf651b092d","type":"HelpTool"},{"attributes":{"formatter":{"id":"f03acfd4-2ea8-46d3-ba9c-94296b5a6b16","type":"BasicTickFormatter"},"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"},"ticker":{"id":"0ee89f78-25dd-4a5d-a111-08354fc83f2b","type":"BasicTicker"}},"id":"1fe5f01b-a283-4df5-aaf7-07c593280210","type":"LinearAxis"},{"attributes":{"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"}},"id":"d97460b5-e96c-455c-be2e-02a03e59dcd4","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"00f5286a-51ed-4f8b-9704-c4152c18829d","type":"PanTool"},{"id":"49002062-1375-4b66-9d69-8cbc9528b906","type":"WheelZoomTool"},{"id":"e63e2db3-5781-4029-96bf-eabbddeeb1a5","type":"BoxZoomTool"},{"id":"d97460b5-e96c-455c-be2e-02a03e59dcd4","type":"SaveTool"},{"id":"b4ee0c7b-0780-43f7-9bc7-03f03091500c","type":"ResetTool"},{"id":"8e162b58-acb4-4ee7-a940-acaf651b092d","type":"HelpTool"}]},"id":"4beb224d-160a-4d5e-9848-94dcb03201b4","type":"Toolbar"},{"attributes":{"plot":{"id":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146","subtype":"Figure","type":"Plot"}},"id":"b4ee0c7b-0780-43f7-9bc7-03f03091500c","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d355ac17-249e-490b-bd9d-1251181905d4","type":"Circle"}],"root_ids":["cc6067ca-4c81-4ae7-85bf-c56e9c2df146"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"ae87f171-a8c7-4ae2-b4eb-8de747d773e9","elementid":"c4a3a854-3f91-4a1d-81e4-4c2019c3a82b","modelid":"cc6067ca-4c81-4ae7-85bf-c56e9c2df146"}];
                
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
