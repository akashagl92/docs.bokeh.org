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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("ef726eea-42f6-459c-b286-a81f00370068");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ef726eea-42f6-459c-b286-a81f00370068' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"7f478dc0-cc61-4944-a209-5e0efc15d72c":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["image"],"data":{"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}]}},"id":"060a54c9-38ba-49b2-bb0f-d05f32046f23","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"38d0f462-7023-479a-9bb4-b3d8184484cb","type":"Title"},{"attributes":{},"id":"20174e09-f2d9-406b-91b9-ef09813e9bd2","type":"LinearScale"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"5091bcbd-f30e-4971-a519-3aa3ef1fea08","type":"ImageRGBA"},{"attributes":{"overlay":{"id":"059e1eb0-05f4-4f51-8bfd-6ecc136b225d","type":"BoxAnnotation"},"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"}},"id":"9818ce4a-8eb0-46a9-b4a8-15847865fce3","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"e7c27518-969c-4d17-af60-086ddbb8df7f","type":"LinearAxis"}],"left":[{"id":"43f256d4-07a0-4aca-b6b5-81dfd6791008","type":"LinearAxis"}],"renderers":[{"id":"e7c27518-969c-4d17-af60-086ddbb8df7f","type":"LinearAxis"},{"id":"7be840d2-9511-4320-b795-1c6ee799e9b2","type":"Grid"},{"id":"43f256d4-07a0-4aca-b6b5-81dfd6791008","type":"LinearAxis"},{"id":"500c3644-dd16-4458-bf2f-501b23f0e0d9","type":"Grid"},{"id":"059e1eb0-05f4-4f51-8bfd-6ecc136b225d","type":"BoxAnnotation"},{"id":"063eb1f8-f045-4827-9c4e-98b410a3eb4f","type":"GlyphRenderer"}],"title":{"id":"38d0f462-7023-479a-9bb4-b3d8184484cb","type":"Title"},"tool_events":{"id":"c7d15a08-e9bb-44f6-ad8c-eaf0528a3c92","type":"ToolEvents"},"toolbar":{"id":"8d4726a4-c46b-4722-8ef8-16f62ea76cd8","type":"Toolbar"},"x_range":{"id":"5d6ef4a6-36be-4ebc-9adb-361cce039d24","type":"Range1d"},"x_scale":{"id":"aadf8e0f-c78d-4b42-a602-ea5cc8b33d79","type":"LinearScale"},"y_range":{"id":"8868c756-1cc6-4a31-b3e6-c6c66bb4e33d","type":"Range1d"},"y_scale":{"id":"20174e09-f2d9-406b-91b9-ef09813e9bd2","type":"LinearScale"}},"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"}},"id":"855587c1-1430-493b-bce0-669ad50e57cd","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"059e1eb0-05f4-4f51-8bfd-6ecc136b225d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"}},"id":"1a029b85-7d08-4627-9282-9521e22989b3","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"19428151-adf4-410a-9c23-bb62255e67ee","type":"BasicTicker"}},"id":"500c3644-dd16-4458-bf2f-501b23f0e0d9","type":"Grid"},{"attributes":{"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"}},"id":"87708e96-e5ed-495a-80ba-d4c7ae7ed01e","type":"SaveTool"},{"attributes":{"dh":{"units":"data","value":10},"dw":{"units":"data","value":10},"image":{"field":"image"},"x":{"value":0},"y":{"value":0}},"id":"34a32f35-7f00-4e53-974b-bc5a7570b304","type":"ImageRGBA"},{"attributes":{},"id":"42bd0021-a3a4-4e24-84db-9091331a26da","type":"BasicTicker"},{"attributes":{"callback":null,"end":10},"id":"8868c756-1cc6-4a31-b3e6-c6c66bb4e33d","type":"Range1d"},{"attributes":{},"id":"70836971-ca76-4f95-a6c1-46ff2843e28d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"220ff71d-e731-4848-a08d-c5e2c000043c","type":"BasicTickFormatter"},"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"19428151-adf4-410a-9c23-bb62255e67ee","type":"BasicTicker"}},"id":"43f256d4-07a0-4aca-b6b5-81dfd6791008","type":"LinearAxis"},{"attributes":{},"id":"aadf8e0f-c78d-4b42-a602-ea5cc8b33d79","type":"LinearScale"},{"attributes":{"data_source":{"id":"060a54c9-38ba-49b2-bb0f-d05f32046f23","type":"ColumnDataSource"},"glyph":{"id":"5091bcbd-f30e-4971-a519-3aa3ef1fea08","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34a32f35-7f00-4e53-974b-bc5a7570b304","type":"ImageRGBA"},"selection_glyph":null},"id":"063eb1f8-f045-4827-9c4e-98b410a3eb4f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"}},"id":"9a197220-a57a-42c4-bfd0-d6c2b1460101","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e8dc78ad-7765-4df0-a07d-6e45ac8987c9","type":"PanTool"},{"id":"855587c1-1430-493b-bce0-669ad50e57cd","type":"WheelZoomTool"},{"id":"9818ce4a-8eb0-46a9-b4a8-15847865fce3","type":"BoxZoomTool"},{"id":"87708e96-e5ed-495a-80ba-d4c7ae7ed01e","type":"SaveTool"},{"id":"1a029b85-7d08-4627-9282-9521e22989b3","type":"ResetTool"},{"id":"9a197220-a57a-42c4-bfd0-d6c2b1460101","type":"HelpTool"}]},"id":"8d4726a4-c46b-4722-8ef8-16f62ea76cd8","type":"Toolbar"},{"attributes":{"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"42bd0021-a3a4-4e24-84db-9091331a26da","type":"BasicTicker"}},"id":"7be840d2-9511-4320-b795-1c6ee799e9b2","type":"Grid"},{"attributes":{},"id":"19428151-adf4-410a-9c23-bb62255e67ee","type":"BasicTicker"},{"attributes":{},"id":"c7d15a08-e9bb-44f6-ad8c-eaf0528a3c92","type":"ToolEvents"},{"attributes":{"callback":null,"end":10},"id":"5d6ef4a6-36be-4ebc-9adb-361cce039d24","type":"Range1d"},{"attributes":{},"id":"220ff71d-e731-4848-a08d-c5e2c000043c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"70836971-ca76-4f95-a6c1-46ff2843e28d","type":"BasicTickFormatter"},"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"},"ticker":{"id":"42bd0021-a3a4-4e24-84db-9091331a26da","type":"BasicTicker"}},"id":"e7c27518-969c-4d17-af60-086ddbb8df7f","type":"LinearAxis"},{"attributes":{"plot":{"id":"bb30a751-91c9-46f0-850f-1a12a05bc2c5","subtype":"Figure","type":"Plot"}},"id":"e8dc78ad-7765-4df0-a07d-6e45ac8987c9","type":"PanTool"}],"root_ids":["bb30a751-91c9-46f0-850f-1a12a05bc2c5"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"7f478dc0-cc61-4944-a209-5e0efc15d72c","elementid":"ef726eea-42f6-459c-b286-a81f00370068","modelid":"bb30a751-91c9-46f0-850f-1a12a05bc2c5"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
