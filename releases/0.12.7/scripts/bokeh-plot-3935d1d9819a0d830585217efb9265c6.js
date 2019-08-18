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
      };var element = document.getElementById("b42510aa-5ab0-44d0-877d-8a172f7780dd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b42510aa-5ab0-44d0-877d-8a172f7780dd' but no matching script tag was found. ")
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
                var docs_json = {"ba38c103-f932-439b-aa0e-6cddc6eda799":{"roots":{"references":[{"attributes":{},"id":"e0b3073c-3482-4cac-aab7-749455961fed","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"945947d4-efd1-42e7-a5be-4c67015b5b79","type":"ColumnDataSource"},"glyph":{"id":"3ca739cf-194d-48db-94ea-8b48b643f66b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c3cb4d0a-764c-4fe7-83d0-0a5afc37a8e0","type":"VBar"},"selection_glyph":null,"view":{"id":"78912741-dbd4-49fe-b7c1-0e79cb79e277","type":"CDSView"}},"id":"452bd070-894d-4ffd-8433-9bdf73056507","type":"GlyphRenderer"},{"attributes":{"end":2,"factors":["2015","2016","2017"],"palette":["#c9d9d3","#718dbf","#e84d60"],"start":1},"id":"46ee8c75-4abe-4fd4-becd-796cb856403f","type":"CategoricalColorMapper"},{"attributes":{"dimension":1,"plot":{"id":"6f503a04-b08a-44ba-b80d-57be54b20312","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6aa4673-bec8-49a3-ad95-c9fa75bdc1db","type":"BasicTicker"}},"id":"b54c004a-c1f1-453c-86fb-1c57def1030d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"c3cb4d0a-764c-4fe7-83d0-0a5afc37a8e0","type":"VBar"},{"attributes":{"callback":null,"start":0},"id":"876c9b4b-5c13-40c1-9136-2a766b3481e3","type":"DataRange1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6f503a04-b08a-44ba-b80d-57be54b20312","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d05d75a-aff1-4549-878f-a0552ad8215f","type":"CategoricalTicker"}},"id":"f382a6e0-c13d-4de0-812f-2ff1f6624f13","type":"Grid"},{"attributes":{"below":[{"id":"6fd3b7da-8777-41d5-839a-6726a7ff97d2","type":"CategoricalAxis"}],"left":[{"id":"4b1a03cd-90f3-4414-9386-377969f0d480","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"6fd3b7da-8777-41d5-839a-6726a7ff97d2","type":"CategoricalAxis"},{"id":"f382a6e0-c13d-4de0-812f-2ff1f6624f13","type":"Grid"},{"id":"4b1a03cd-90f3-4414-9386-377969f0d480","type":"LinearAxis"},{"id":"b54c004a-c1f1-453c-86fb-1c57def1030d","type":"Grid"},{"id":"452bd070-894d-4ffd-8433-9bdf73056507","type":"GlyphRenderer"}],"title":{"id":"cea8a5e8-c386-4ad0-9dfc-65198ef0ef45","type":"Title"},"toolbar":{"id":"c69cb3cc-f3b2-4289-beca-48eb44bc06c1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"10f1de2d-71e2-4d8b-b6b1-a29715200b08","type":"FactorRange"},"x_scale":{"id":"da7b91bc-2466-4e00-b49c-a8aeb19d10db","type":"CategoricalScale"},"y_range":{"id":"876c9b4b-5c13-40c1-9136-2a766b3481e3","type":"DataRange1d"},"y_scale":{"id":"5153f1d5-27d9-4695-bf04-2e79f1ad59b4","type":"LinearScale"}},"id":"6f503a04-b08a-44ba-b80d-57be54b20312","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"945947d4-efd1-42e7-a5be-4c67015b5b79","type":"ColumnDataSource"}},"id":"78912741-dbd4-49fe-b7c1-0e79cb79e277","type":"CDSView"},{"attributes":{},"id":"c6aa4673-bec8-49a3-ad95-c9fa75bdc1db","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c69cb3cc-f3b2-4289-beca-48eb44bc06c1","type":"Toolbar"},{"attributes":{"plot":null,"text":"Fruit Counts by Year"},"id":"cea8a5e8-c386-4ad0-9dfc-65198ef0ef45","type":"Title"},{"attributes":{},"id":"f37f89ba-6455-4d42-9a21-8cc7bf1660ff","type":"CategoricalTickFormatter"},{"attributes":{"formatter":{"id":"f37f89ba-6455-4d42-9a21-8cc7bf1660ff","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"6f503a04-b08a-44ba-b80d-57be54b20312","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d05d75a-aff1-4549-878f-a0552ad8215f","type":"CategoricalTicker"}},"id":"6fd3b7da-8777-41d5-839a-6726a7ff97d2","type":"CategoricalAxis"},{"attributes":{},"id":"da7b91bc-2466-4e00-b49c-a8aeb19d10db","type":"CategoricalScale"},{"attributes":{},"id":"5153f1d5-27d9-4695-bf04-2e79f1ad59b4","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","counts"],"data":{"counts":[2,5,3,1,3,2,4,3,4,3,2,4,2,4,5,4,6,3],"x":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]]}},"id":"945947d4-efd1-42e7-a5be-4c67015b5b79","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"x","transform":{"id":"46ee8c75-4abe-4fd4-becd-796cb856403f","type":"CategoricalColorMapper"}},"line_color":{"value":"white"},"top":{"field":"counts"},"width":{"value":0.9},"x":{"field":"x"}},"id":"3ca739cf-194d-48db-94ea-8b48b643f66b","type":"VBar"},{"attributes":{"callback":null,"factors":[["Apples","2015"],["Apples","2016"],["Apples","2017"],["Pears","2015"],["Pears","2016"],["Pears","2017"],["Nectarines","2015"],["Nectarines","2016"],["Nectarines","2017"],["Plums","2015"],["Plums","2016"],["Plums","2017"],["Grapes","2015"],["Grapes","2016"],["Grapes","2017"],["Strawberries","2015"],["Strawberries","2016"],["Strawberries","2017"]],"range_padding":0.1},"id":"10f1de2d-71e2-4d8b-b6b1-a29715200b08","type":"FactorRange"},{"attributes":{"formatter":{"id":"e0b3073c-3482-4cac-aab7-749455961fed","type":"BasicTickFormatter"},"plot":{"id":"6f503a04-b08a-44ba-b80d-57be54b20312","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6aa4673-bec8-49a3-ad95-c9fa75bdc1db","type":"BasicTicker"}},"id":"4b1a03cd-90f3-4414-9386-377969f0d480","type":"LinearAxis"},{"attributes":{},"id":"4d05d75a-aff1-4549-878f-a0552ad8215f","type":"CategoricalTicker"}],"root_ids":["6f503a04-b08a-44ba-b80d-57be54b20312"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ba38c103-f932-439b-aa0e-6cddc6eda799","elementid":"b42510aa-5ab0-44d0-877d-8a172f7780dd","modelid":"6f503a04-b08a-44ba-b80d-57be54b20312"}];
                
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
