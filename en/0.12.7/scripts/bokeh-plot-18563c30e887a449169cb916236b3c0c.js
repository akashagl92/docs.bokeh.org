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
      };var element = document.getElementById("ca0bda0a-d65f-4da9-a31a-827309355d6b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca0bda0a-d65f-4da9-a31a-827309355d6b' but no matching script tag was found. ")
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
                var docs_json = {"4ea01e42-6a37-4a53-88e5-4ba23ebdb115":{"roots":{"references":[{"attributes":{"callback":null,"end":10},"id":"89d06cdd-5e60-46f6-ae31-092b090bc1b8","type":"Range1d"},{"attributes":{},"id":"914eec70-f688-46c6-9c0a-b0b73ec14f7f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6dc016d6-f2dd-4367-a2ac-9c2ba6dd0245","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0b0f33f-8e78-41f5-83ee-4a72f6b1d169","type":"BasicTicker"}},"id":"bfd39e9e-f33c-4680-ae0d-2414740f2c79","type":"Grid"},{"attributes":{"formatter":{"id":"c88b27ae-95cf-41f2-bfb1-1e64b19a74ec","type":"BasicTickFormatter"},"plot":{"id":"6dc016d6-f2dd-4367-a2ac-9c2ba6dd0245","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0b0f33f-8e78-41f5-83ee-4a72f6b1d169","type":"BasicTicker"}},"id":"55bfb4e2-9f70-48a6-8f47-962586dd6e64","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d85f01e6-10b7-4a88-9371-e7c83a35bb60","type":"PanTool"},{"id":"914eec70-f688-46c6-9c0a-b0b73ec14f7f","type":"WheelZoomTool"},{"id":"7f6149f5-6b19-4c58-acd5-81ed9374823b","type":"BoxZoomTool"},{"id":"120f2b4c-2844-4dc7-8a50-74fbb13edd0e","type":"SaveTool"},{"id":"b21f84b5-1b8a-4393-8fe8-47a4834a1ede","type":"ResetTool"},{"id":"f2299e19-abe1-4114-9e86-82d9b05045c0","type":"HelpTool"}]},"id":"a91380a7-cf12-4bdf-aab4-fd998d82b730","type":"Toolbar"},{"attributes":{},"id":"4f5a98b4-5d82-4b64-9ce1-014a61ba5af4","type":"LinearScale"},{"attributes":{},"id":"a2cd8d9c-54dc-4b90-9637-98cd696735df","type":"BasicTickFormatter"},{"attributes":{},"id":"c88b27ae-95cf-41f2-bfb1-1e64b19a74ec","type":"BasicTickFormatter"},{"attributes":{},"id":"f2299e19-abe1-4114-9e86-82d9b05045c0","type":"HelpTool"},{"attributes":{"overlay":{"id":"69eef24e-daf0-45ba-bb56-0c68cdc93605","type":"BoxAnnotation"}},"id":"7f6149f5-6b19-4c58-acd5-81ed9374823b","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":10},"id":"bcfa3dfb-31d4-4823-9d9c-de94d6582bd8","type":"Range1d"},{"attributes":{},"id":"b1d1c70c-4b8a-4157-97e8-ff8e4e38b042","type":"LinearScale"},{"attributes":{},"id":"f0b0f33f-8e78-41f5-83ee-4a72f6b1d169","type":"BasicTicker"},{"attributes":{},"id":"c4a0887e-9625-4b75-932e-5b952faf1e94","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"78d169e6-5230-47d5-9647-75e85c4bb7d2","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69eef24e-daf0-45ba-bb56-0c68cdc93605","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"55bfb4e2-9f70-48a6-8f47-962586dd6e64","type":"LinearAxis"}],"left":[{"id":"f6feffa5-66f4-4f4b-93af-55c8b5a68960","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"55bfb4e2-9f70-48a6-8f47-962586dd6e64","type":"LinearAxis"},{"id":"bfd39e9e-f33c-4680-ae0d-2414740f2c79","type":"Grid"},{"id":"f6feffa5-66f4-4f4b-93af-55c8b5a68960","type":"LinearAxis"},{"id":"47cb6153-c61e-4151-9e19-d01d244247e1","type":"Grid"},{"id":"69eef24e-daf0-45ba-bb56-0c68cdc93605","type":"BoxAnnotation"},{"id":"bb848e13-dd60-49ca-9a2c-5a0365eb183b","type":"GlyphRenderer"}],"title":{"id":"78d169e6-5230-47d5-9647-75e85c4bb7d2","type":"Title"},"toolbar":{"id":"a91380a7-cf12-4bdf-aab4-fd998d82b730","type":"Toolbar"},"x_range":{"id":"bcfa3dfb-31d4-4823-9d9c-de94d6582bd8","type":"Range1d"},"x_scale":{"id":"b1d1c70c-4b8a-4157-97e8-ff8e4e38b042","type":"LinearScale"},"y_range":{"id":"89d06cdd-5e60-46f6-ae31-092b090bc1b8","type":"Range1d"},"y_scale":{"id":"4f5a98b4-5d82-4b64-9ce1-014a61ba5af4","type":"LinearScale"}},"id":"6dc016d6-f2dd-4367-a2ac-9c2ba6dd0245","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b21f84b5-1b8a-4393-8fe8-47a4834a1ede","type":"ResetTool"},{"attributes":{},"id":"120f2b4c-2844-4dc7-8a50-74fbb13edd0e","type":"SaveTool"},{"attributes":{},"id":"d85f01e6-10b7-4a88-9371-e7c83a35bb60","type":"PanTool"},{"attributes":{"data_source":{"id":"9aa837e4-5852-496c-b2ac-3f5f3cc327bf","type":"ColumnDataSource"},"glyph":{"id":"98e06b73-b1a4-4bcf-92a7-8dcf137949b5","type":"ImageRGBA"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ecd57ee2-f156-473e-b589-feb38d4212b7","type":"ImageRGBA"},"selection_glyph":null,"view":{"id":"6d82629d-90e6-4000-bedd-ada8411fa513","type":"CDSView"}},"id":"bb848e13-dd60-49ca-9a2c-5a0365eb183b","type":"GlyphRenderer"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ecd57ee2-f156-473e-b589-feb38d4212b7","type":"ImageRGBA"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"98e06b73-b1a4-4bcf-92a7-8dcf137949b5","type":"ImageRGBA"},{"attributes":{"source":{"id":"9aa837e4-5852-496c-b2ac-3f5f3cc327bf","type":"ColumnDataSource"}},"id":"6d82629d-90e6-4000-bedd-ada8411fa513","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"6dc016d6-f2dd-4367-a2ac-9c2ba6dd0245","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4a0887e-9625-4b75-932e-5b952faf1e94","type":"BasicTicker"}},"id":"47cb6153-c61e-4151-9e19-d01d244247e1","type":"Grid"},{"attributes":{"callback":null,"column_names":["image","x","y","dw","dh"],"data":{"dh":[10],"dw":[10],"image":[{"__ndarray__":"AJ4A/wCeDP8Anhn/AJ4m/wCeM/8Anj//AJ5M/wCeWf8Anmb/AJ5y/wCef/8Anoz/AJ6Z/wCepf8AnrL/AJ6//wCezP8Antj/AJ7l/wCe8v8MngD/DJ4M/wyeGf8Mnib/DJ4z/wyeP/8Mnkz/DJ5Z/wyeZv8MnnL/DJ5//wyejP8Mnpn/DJ6l/wyesv8Mnr//DJ7M/wye2P8MnuX/DJ7y/xmeAP8Zngz/GZ4Z/xmeJv8ZnjP/GZ4//xmeTP8Znln/GZ5m/xmecv8Znn//GZ6M/xmemf8ZnqX/GZ6y/xmev/8Znsz/GZ7Y/xme5f8ZnvL/Jp4A/yaeDP8mnhn/Jp4m/yaeM/8mnj//Jp5M/yaeWf8mnmb/Jp5y/yaef/8mnoz/Jp6Z/yaepf8mnrL/Jp6//yaezP8mntj/Jp7l/yae8v8zngD/M54M/zOeGf8znib/M54z/zOeP/8znkz/M55Z/zOeZv8znnL/M55//zOejP8znpn/M56l/zOesv8znr//M57M/zOe2P8znuX/M57y/z+eAP8/ngz/P54Z/z+eJv8/njP/P54//z+eTP8/nln/P55m/z+ecv8/nn//P56M/z+emf8/nqX/P56y/z+ev/8/nsz/P57Y/z+e5f8/nvL/TJ4A/0yeDP9Mnhn/TJ4m/0yeM/9Mnj//TJ5M/0yeWf9Mnmb/TJ5y/0yef/9Mnoz/TJ6Z/0yepf9MnrL/TJ6//0yezP9Mntj/TJ7l/0ye8v9ZngD/WZ4M/1meGf9Znib/WZ4z/1meP/9Znkz/WZ5Z/1meZv9ZnnL/WZ5//1mejP9Znpn/WZ6l/1mesv9Znr//WZ7M/1me2P9ZnuX/WZ7y/2aeAP9mngz/Zp4Z/2aeJv9mnjP/Zp4//2aeTP9mnln/Zp5m/2aecv9mnn//Zp6M/2aemf9mnqX/Zp6y/2aev/9mnsz/Zp7Y/2ae5f9mnvL/cp4A/3KeDP9ynhn/cp4m/3KeM/9ynj//cp5M/3KeWf9ynmb/cp5y/3Kef/9ynoz/cp6Z/3Kepf9ynrL/cp6//3KezP9yntj/cp7l/3Ke8v9/ngD/f54M/3+eGf9/nib/f54z/3+eP/9/nkz/f55Z/3+eZv9/nnL/f55//3+ejP9/npn/f56l/3+esv9/nr//f57M/3+e2P9/nuX/f57y/4yeAP+Mngz/jJ4Z/4yeJv+MnjP/jJ4//4yeTP+Mnln/jJ5m/4yecv+Mnn//jJ6M/4yemf+MnqX/jJ6y/4yev/+Mnsz/jJ7Y/4ye5f+MnvL/mZ4A/5meDP+Znhn/mZ4m/5meM/+Znj//mZ5M/5meWf+Znmb/mZ5y/5mef/+Znoz/mZ6Z/5mepf+ZnrL/mZ6//5mezP+Zntj/mZ7l/5me8v+lngD/pZ4M/6WeGf+lnib/pZ4z/6WeP/+lnkz/pZ5Z/6WeZv+lnnL/pZ5//6WejP+lnpn/pZ6l/6Wesv+lnr//pZ7M/6We2P+lnuX/pZ7y/7KeAP+yngz/sp4Z/7KeJv+ynjP/sp4//7KeTP+ynln/sp5m/7Kecv+ynn//sp6M/7Kemf+ynqX/sp6y/7Kev/+ynsz/sp7Y/7Ke5f+ynvL/v54A/7+eDP+/nhn/v54m/7+eM/+/nj//v55M/7+eWf+/nmb/v55y/7+ef/+/noz/v56Z/7+epf+/nrL/v56//7+ezP+/ntj/v57l/7+e8v/MngD/zJ4M/8yeGf/Mnib/zJ4z/8yeP//Mnkz/zJ5Z/8yeZv/MnnL/zJ5//8yejP/Mnpn/zJ6l/8yesv/Mnr//zJ7M/8ye2P/MnuX/zJ7y/9ieAP/Yngz/2J4Z/9ieJv/YnjP/2J4//9ieTP/Ynln/2J5m/9iecv/Ynn//2J6M/9iemf/YnqX/2J6y/9iev//Ynsz/2J7Y/9ie5f/YnvL/5Z4A/+WeDP/lnhn/5Z4m/+WeM//lnj//5Z5M/+WeWf/lnmb/5Z5y/+Wef//lnoz/5Z6Z/+Wepf/lnrL/5Z6//+WezP/lntj/5Z7l/+We8v/yngD/8p4M//KeGf/ynib/8p4z//KeP//ynkz/8p5Z//KeZv/ynnL/8p5///KejP/ynpn/8p6l//Kesv/ynr//8p7M//Ke2P/ynuX/8p7y/w==","dtype":"uint32","shape":[20,20]}],"x":[0],"y":[0]}},"id":"9aa837e4-5852-496c-b2ac-3f5f3cc327bf","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"a2cd8d9c-54dc-4b90-9637-98cd696735df","type":"BasicTickFormatter"},"plot":{"id":"6dc016d6-f2dd-4367-a2ac-9c2ba6dd0245","subtype":"Figure","type":"Plot"},"ticker":{"id":"c4a0887e-9625-4b75-932e-5b952faf1e94","type":"BasicTicker"}},"id":"f6feffa5-66f4-4f4b-93af-55c8b5a68960","type":"LinearAxis"}],"root_ids":["6dc016d6-f2dd-4367-a2ac-9c2ba6dd0245"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"4ea01e42-6a37-4a53-88e5-4ba23ebdb115","elementid":"ca0bda0a-d65f-4da9-a31a-827309355d6b","modelid":"6dc016d6-f2dd-4367-a2ac-9c2ba6dd0245"}];
                
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
