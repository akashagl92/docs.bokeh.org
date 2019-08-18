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
      };var element = document.getElementById("8353015c-ddf2-4b3f-b6f1-c4ffd53edc8f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8353015c-ddf2-4b3f-b6f1-c4ffd53edc8f' but no matching script tag was found. ")
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
                var docs_json = {"3c746b05-8979-49a1-9c65-a554d86e7786":{"roots":{"references":[{"attributes":{},"id":"2cc0d7e6-0ae6-4f0e-a6c2-6d6dd6f056c4","type":"YearsTicker"},{"attributes":{"callback":null},"id":"3bfcb4a8-9d51-4cfd-bc7a-f84a7f6731b1","type":"DataRange1d"},{"attributes":{"months":[0,4,8]},"id":"d37e48d0-fc78-4b62-9c5b-81d6b47ab3dc","type":"MonthsTicker"},{"attributes":{"line_color":{"value":"#ebbd5b"},"line_width":{"value":2},"x":{"field":"date"},"y":{"field":"adj close"}},"id":"7c508c5e-673d-4af8-a63d-47862604b66b","type":"Line"},{"attributes":{},"id":"c379f23b-65e4-4c16-8d74-324d102e9ba8","type":"LinearScale"},{"attributes":{"callback":null},"id":"8d4aecc3-8bd2-4100-b28a-d9ccb0716fb3","type":"DataRange1d"},{"attributes":{},"id":"4757fb07-5190-4359-b217-96eca031157d","type":"LinearScale"},{"attributes":{"grid_line_color":{"value":"white"},"plot":{"id":"2beda4c7-66c9-4c3b-bcec-6bf41ff2f9d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"5fe0a3c8-7297-4cbf-b490-d0e8bf98b6fe","type":"DatetimeTicker"}},"id":"512c1932-e937-468a-a32f-994503027932","type":"Grid"},{"attributes":{"axis_label":"Date","axis_line_color":{"value":null},"formatter":{"id":"e7f527ca-18ee-4a42-a9e3-480e24337755","type":"DatetimeTickFormatter"},"plot":{"id":"2beda4c7-66c9-4c3b-bcec-6bf41ff2f9d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"5fe0a3c8-7297-4cbf-b490-d0e8bf98b6fe","type":"DatetimeTicker"}},"id":"d9f9ac81-559b-4cf1-a634-3a0d26278ad6","type":"DatetimeAxis"},{"attributes":{"callback":null,"column_names":["date","adj close","volume"],"data":{"adj close":[31.68,28.26,33.05,26.56,30.82,25.0,21.22,23.28,25.14,27.78,23.68,23.31,24.56,30.36,29.15,10.85,9.78,9.51,9.85,8.54,7.29,7.2,8.36,10.55,9.57,9.42,9.51,11.12,10.72,12.02,11.66,11.3,10.53,10.94,10.71,9.72,9.48,8.79,9.02,7.65,7.85,8.9,9.03,9.22,10.24,10.03,11.33,10.1,12.02,11.96,11.4,12.13,11.89,12.16,11.65,11.64,11.66,9.95,8.33,8.42,7.39,7.31,7.84,6.9,7.09,6.95,6.86,7.81,7.93,7.54,7.19,6.84,7.1,7.26,7.0,7.23,7.16,7.05,6.99,6.49,8.9,8.91,8.16,9.27,9.92,10.11,9.91,9.88,11.16,10.76,10.11,12.07,11.52,10.86,10.08,10.31,10.1,11.54,11.22,11.17,11.09,13.46,12.4,13.28,13.51,12.93,12.99,14.0,15.72,15.05,15.66,15.22,15.01,16.77,17.12,18.81,19.33,24.46,26.62,31.15,31.12,31.13,33.67,34.41,38.39,41.47,39.42,41.65,41.17,34.54,36.13,34.86,38.94,36.94,35.8,40.41,41.48,44.83,44.48,49.99,52.36,48.99,55.23,58.58,63.18,72.02,70.13,72.34,74.0,69.88,68.36,63.68,62.23,60.93,64.4,69.65,63.2,58.13,56.03,54.48,50.82,61.66,62.31,65.95,70.53,71.0,72.18,77.76,76.14,83.49,88.62,83.12,83.31,86.07,82.42,82.5,83.95,88.63,91.08,87.87,96.74,104.57,115.51,114.27,118.54,130.39,141.99,122.92,127.47,128.15,140.19,157.02,165.74,182.71,161.82,173.95,179.34,189.49,155.26,131.64,123.96,121.59,123.13,139.56,143.72,167.51,183.0,181.31,180.54,168.49,169.47,161.7,159.68,171.01,156.79,130.41,97.35,99.09,107.99,93.79,90.13,95.57,84.23,85.3,91.61,94.16,86.74,93.71,106.85,116.29,120.5,125.64,119.14,139.9,133.6,131.68,147.35,161.01,159.5,160.76,176.88,180.26,186.04,187.12,197.67,198.59,191.04,203.3,204.34,200.29,190.81,195.15,218.67,223.07,233.36,259.16,239.49,231.23,248.93,266.55,240.16,238.84,254.66,240.84,235.84,260.7,278.99,290.35,299.59,307.4,300.26,312.2,316.24,324.57,317.75,336.99,340.94,345.61,329.99,331.83,322.74,338.64,326.91,336.03,317.78,324.87,347.95,381.07,363.44,363.46,367.12,393.2,359.65,382.09,389.25,364.65,382.22,371.72,402.09,416.01,442.63,488.43,530.22,569.5,583.09,564.21,567.95,542.9,556.56,560.35,556.33,587.84,559.19,602.85,653.3,660.53,682.44,651.28,617.92,571.02,555.09,565.02,523.86,531.9,493.22,445.09,454.14],"date":{"__ndarray__":"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","dtype":"float64","shape":[327]},"volume":[38478000,15845200,8568800,33618800,11678000,17852400,14530800,9020000,7320400,14211000,14720600,6697200,4803800,10669000,9706200,72795600,21495600,31649000,14611200,17586200,12327200,10910000,15121000,30562800,9795600,12451000,15840600,19422200,16334800,11813600,11603200,10037200,11613600,12190400,10818600,15878000,6644800,7443800,7746600,20375600,12238800,5956800,7043000,8238000,6470200,6204000,18910600,20246200,16730200,9291800,12464000,8603600,7108800,10691800,9724600,9486000,5347000,12482000,10757200,7388600,14521200,11909800,7229600,8077800,7355200,7782000,16760600,10565600,5061200,5122600,5885000,5537200,6673600,13323000,8167400,5512200,11980200,4371200,3825000,7332800,21013800,7382800,9284000,10977200,9169200,7086600,8908600,4774600,9601000,10335600,8432600,21789400,9538600,10714400,8754600,6540600,3703400,17412400,10966800,9119400,9867000,35963000,15293400,9111400,12306600,9412800,7010600,14254000,13936200,12463600,11562400,7558200,11536400,13448600,8309600,9768200,41536000,42624800,18167000,49671000,26482200,8783200,79551800,30058200,18730600,43546200,36480400,19693400,14815200,33754700,16006300,22740100,13356200,19559800,14942500,24560100,20074300,32715600,9323500,16171300,19520100,18125200,21776900,22815400,18275400,30608200,17111000,16050800,40527100,24718700,20571400,32595200,21622900,29135400,28387300,27559400,33455000,45749200,31362000,30382300,44639500,26251600,24920000,23399700,31997200,23754000,16677100,22836200,15424600,16658000,25340600,25770600,30259300,48731200,22197500,14281000,29960700,25462900,17928300,26854300,19018700,34089800,52801600,61476900,34810600,25164600,78093900,40192700,30958500,51092000,40674300,33695400,46135000,35789800,49391300,34338200,36596200,38542100,79065900,48059800,34074900,44838600,41308600,27430900,30181700,28114800,29234400,28210900,40728600,22212400,31992000,37920300,28264600,18105400,26549500,59866200,57477300,70732900,58503200,66217400,10634800,37184800,24500000,28514200,30764500,24106200,22495300,27444900,22009000,18955600,19313000,16713000,10642800,33273300,22675500,16485600,31242200,14136100,15398300,16751000,26929400,19270900,13411100,29228100,15852500,10230500,17488200,17888900,16508200,66682500,22603100,16448800,21293500,21349300,20463900,28336600,45923600,45818400,27082300,28022200,24780100,36588500,15287700,11372500,13688900,14576800,36965800,19948000,14033200,13698000,18551700,11497700,9497200,10729600,26942900,11494300,29144900,19504400,14621500,16431600,21782100,11191000,16154800,19810100,14257000,12590900,15376200,21215500,26498900,31119500,20171900,19509900,19123500,22187300,10793900,13283500,12757500,8411800,9286500,9347800,6671300,33734000,15418300,29481700,26108500,37528100,18076600,12593800,13589600,15549300,9876300,16761500,31332600,8739500,20190100,13971300,12020300,13240200,17022300,18897700,29404200,19895300,22345900,12605900,16202800,19267300,13990900]}},"id":"0925a557-e13f-448d-a95e-cd666bf4c88f","type":"ColumnDataSource"},{"attributes":{"axis_label":"Price","axis_line_color":{"value":null},"formatter":{"id":"9796d0d2-10d8-4782-8707-f81afbb7c2cf","type":"BasicTickFormatter"},"plot":{"id":"2beda4c7-66c9-4c3b-bcec-6bf41ff2f9d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ff80f73-9923-4458-85e2-abb2c460ede9","type":"BasicTicker"}},"id":"5a6f4080-ebf6-41f2-874f-eba927c69614","type":"LinearAxis"},{"attributes":{"num_minor_ticks":5},"id":"5fe0a3c8-7297-4cbf-b490-d0e8bf98b6fe","type":"DatetimeTicker"},{"attributes":{"background_fill_color":{"value":"#f5f5f5"},"below":[{"id":"d9f9ac81-559b-4cf1-a634-3a0d26278ad6","type":"DatetimeAxis"}],"left":[{"id":"5a6f4080-ebf6-41f2-874f-eba927c69614","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"d9f9ac81-559b-4cf1-a634-3a0d26278ad6","type":"DatetimeAxis"},{"id":"512c1932-e937-468a-a32f-994503027932","type":"Grid"},{"id":"5a6f4080-ebf6-41f2-874f-eba927c69614","type":"LinearAxis"},{"id":"9ae2b08e-8bb8-4ecc-8d74-19057f6e8c2a","type":"Grid"},{"id":"be4d0e83-ecb2-4ba1-b7b6-82fa13f26110","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"5001ca68-7b62-414d-8c6a-b8aa11b38127","type":"Title"},"toolbar":{"id":"5cf8ad09-06cc-4db5-adc8-0c72c5902892","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3bfcb4a8-9d51-4cfd-bc7a-f84a7f6731b1","type":"DataRange1d"},"x_scale":{"id":"c379f23b-65e4-4c16-8d74-324d102e9ba8","type":"LinearScale"},"y_range":{"id":"8d4aecc3-8bd2-4100-b28a-d9ccb0716fb3","type":"DataRange1d"},"y_scale":{"id":"4757fb07-5190-4359-b217-96eca031157d","type":"LinearScale"}},"id":"2beda4c7-66c9-4c3b-bcec-6bf41ff2f9d5","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2ff80f73-9923-4458-85e2-abb2c460ede9","type":"BasicTicker"},{"attributes":{"days":[1,8,15,22]},"id":"3d43e0d5-21e1-4f74-82e1-a3149382ffee","type":"DaysTicker"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"plot":{"id":"2beda4c7-66c9-4c3b-bcec-6bf41ff2f9d5","subtype":"Figure","type":"Plot"},"ticker":{"id":"2ff80f73-9923-4458-85e2-abb2c460ede9","type":"BasicTicker"}},"id":"9ae2b08e-8bb8-4ecc-8d74-19057f6e8c2a","type":"Grid"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"c2954dc9-350f-4206-81d9-2138ac307917","type":"AdaptiveTicker"},{"attributes":{},"id":"e7f527ca-18ee-4a42-a9e3-480e24337755","type":"DatetimeTickFormatter"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"68da32fd-41f8-465a-9fe8-166fadaff92c","type":"AdaptiveTicker"},{"attributes":{},"id":"9796d0d2-10d8-4782-8707-f81afbb7c2cf","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0d4b0488-2702-4a06-bd33-71b44d39c779","type":"HoverTool"}]},"id":"5cf8ad09-06cc-4db5-adc8-0c72c5902892","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"date"},"y":{"field":"adj close"}},"id":"55b8416b-9fa6-451e-aedf-20121012e8fe","type":"Line"},{"attributes":{"data_source":{"id":"0925a557-e13f-448d-a95e-cd666bf4c88f","type":"ColumnDataSource"},"glyph":{"id":"7c508c5e-673d-4af8-a63d-47862604b66b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"55b8416b-9fa6-451e-aedf-20121012e8fe","type":"Line"},"selection_glyph":null,"view":{"id":"86c28523-bdd3-4779-aab5-c3bd22c51947","type":"CDSView"}},"id":"be4d0e83-ecb2-4ba1-b7b6-82fa13f26110","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0925a557-e13f-448d-a95e-cd666bf4c88f","type":"ColumnDataSource"}},"id":"86c28523-bdd3-4779-aab5-c3bd22c51947","type":"CDSView"},{"attributes":{"plot":null,"text":"Hover Tooltip Formatting"},"id":"5001ca68-7b62-414d-8c6a-b8aa11b38127","type":"Title"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"f188e03a-6cee-43c1-90cd-0ed8774b0216","type":"DaysTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"0b46af49-71b2-49c9-b7fa-019b1f86fa8f","type":"AdaptiveTicker"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"53f7c1a8-d620-422c-bce8-9b3ed5cafbf1","type":"DaysTicker"},{"attributes":{"days":[1,15]},"id":"7b60f50e-2858-48f4-b61b-df20922fba8f","type":"DaysTicker"},{"attributes":{"callback":null,"formatters":{"adj close":"printf","date":"datetime"},"mode":"vline","tooltips":[["date","@date{%F}"],["close","$@{adj close}{%0.2f}"],["volume","@volume{0.00 a}"]]},"id":"0d4b0488-2702-4a06-bd33-71b44d39c779","type":"HoverTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"3eb5577f-e9ce-4913-9044-cdb344d2203c","type":"MonthsTicker"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"a1536515-6f84-4d42-8ee7-ca91c3ce5482","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"a3358221-091d-4f9e-bf55-b2de8076e8b5","type":"MonthsTicker"}],"root_ids":["2beda4c7-66c9-4c3b-bcec-6bf41ff2f9d5"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"3c746b05-8979-49a1-9c65-a554d86e7786","elementid":"8353015c-ddf2-4b3f-b6f1-c4ffd53edc8f","modelid":"2beda4c7-66c9-4c3b-bcec-6bf41ff2f9d5"}];
                
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
